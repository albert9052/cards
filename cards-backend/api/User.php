<?php

class User
{
    public function signUp($username, $password)
    {
        require_once('conn.php');
        $goodUsername = $conn->real_escape_string($username);
        $goodPassword = $conn->real_escape_string($password);
        $stmt = $conn->prepare('SELECT * FROM User WHERE username=?;');
        $stmt->bind_param('s', $goodUsername);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = mysqli_fetch_array($result);
        if ($row) {
            return false;
        }
        $stmt = $conn->prepare('INSERT INTO User VALUES (?, ?, null);');
        $hashedPassword = password_hash($goodPassword, PASSWORD_DEFAULT);
        $stmt->bind_param('ss', $goodUsername, $hashedPassword);
        $stmt->execute();
        if ($stmt->affected_rows === 0) {
            exit('{"error": "No rows inserted"}');
        }
        $stmt->close();
        return true;
    }

    public function updateAvatarFile($avatar)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return;
        }

        $fileName = $avatar['name'];
        $tempPath = $avatar['tmp_name'];
        $fileSize = $avatar['size'];
        if (empty($fileName)) {
            return false;
        }
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;

        $uploadPath = 'avatar/';

        $validExtensions = array('jpeg', 'jpg', 'png');
        if (in_array($fileExtension, $validExtensions)) {
            while (file_exists($uploadPath . $fileName)) {
                $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;
            }
            move_uploaded_file($tempPath, $uploadPath . $fileName);
        } else {
            return false;
        }
        $avatarURL = $uploadPath . $fileName;
        $goodUsername = $data['username'];
        $goodAvatarURL = $conn->real_escape_string($avatarURL);
        $stmt = $conn->prepare('UPDATE User SET avatarURL=? WHERE username=?;');
        $stmt->bind_param('ss', $goodAvatarURL, $goodUsername);
        $stmt->execute();
        $stmt->close();
        return true;
    }

    public function updateAvatarURL($avatarURL)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return;
        }

        if (strpos($avatarURL, 'https://') != 0) {
            $avatarURL = 'https://' . $avatarURL;
        }

        $fileName = basename($avatarURL);
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
        $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;

        $uploadPath = 'avatar/';

        $validExtensions = array('jpeg', 'jpg', 'png');
        if (in_array($fileExtension, $validExtensions)) {
            while (file_exists($uploadPath . $fileName)) {
                $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;
            }
            file_put_contents($uploadPath . $fileName, file_get_contents($avatarURL));
        } else {
            return false;
        }
        $avatarURL = $uploadPath . $fileName;
        $goodUsername = $data['username'];
        $goodAvatarURL = $conn->real_escape_string($avatarURL);
        $stmt = $conn->prepare('UPDATE User SET avatarURL=? WHERE username=?;');
        $stmt->bind_param('ss', $goodAvatarURL, $goodUsername);
        $stmt->execute();
        $stmt->close();
        return true;
    }

    public function signIn($username, $password)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $goodUsername = $conn->real_escape_string($username);
        $goodPassword = $conn->real_escape_string($password);
        $stmt = $conn->prepare('SELECT * FROM User WHERE username=?;');
        $stmt->bind_param('s', $goodUsername);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $row = mysqli_fetch_array($result);
        if ($row) {
            if (password_verify($goodPassword, $row['password'])) {
                $jwtHandler = new JWTHandler();
                $headers = array('alg' => 'HS256', 'typ' => 'JWT');
                $payload = array('username'=>$goodUsername, 'exp'=>(time() + 3600));
                $jwt = $jwtHandler->generate_jwt($headers, $payload);
                setcookie('jwt', $jwt, null, null, null, true, true);
                return true;
            }
        }
        return false;
    }

    public function signInAsAdmin($account, $password)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $goodAccount = $conn->real_escape_string($account);
        $goodPassword = $conn->real_escape_string($password);
        $stmt = $conn->prepare('SELECT * FROM Admin WHERE account=?;');
        $stmt->bind_param('s', $goodAccount);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $row = mysqli_fetch_array($result);
        if ($row) {
            if (password_verify($goodPassword, $row['password'])) {
                return true;
            }
        }
        return false;
    }

    public function verifyJWT()
    {
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return;
        }
        return true;
    }

    public function getInformation()
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return;
        }
        $goodUsername = $data['username'];
        $stmt = $conn->prepare('SELECT * FROM User WHERE username=?;');
        $stmt->bind_param('s', $goodUsername);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $row = mysqli_fetch_array($result);
        if ($row) {
            $userInformation = array();
            $userInformation['username'] = $row['username'];
            $userInformation['avatarURL'] = $row['avatarURL'];
            return $userInformation;
        }
        return;
    }

    public function signOut()
    {
        setcookie('jwt', '', null, null, null, false, true);
    }
}
