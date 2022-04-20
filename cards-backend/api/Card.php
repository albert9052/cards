<?php

class Card
{
    public function getAllCards()
    {
        require_once('conn.php');
        $result = $conn->query('SELECT c.cardID, c.username, u.avatarURL, c.content, c.attachmentURL FROM Card c LEFT JOIN User u ON c.username=u.username;');

        $response = array();
        while ($row = mysqli_fetch_array($result)) {
            if (isset($row['attachmentURL']) && $row['attachmentURL'] != '') {
                unset($row['attachmentURL']);
                $row['hasAttachment'] = true;
            } else {
                unset($row['attachmentURL']);
                $row['hasAttachment'] = false;
            }
            array_push($response, $row);
        }
        return $response;
    }

    public function getMyCards()
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return;
        }
        $stmt = $conn->prepare('SELECT c.cardID, c.username, u.avatarURL, c.content, c.attachmentURL FROM Card c LEFT JOIN User u ON c.username=u.username WHERE u.username=?;');
        $stmt->bind_param('s', $data['username']);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();

        $response = array();
        while ($row = mysqli_fetch_array($result)) {
            if (isset($row['attachmentURL']) && $row['attachmentURL'] != '') {
                unset($row['attachmentURL']);
                $row['hasAttachment'] = true;
            } else {
                unset($row['attachmentURL']);
                $row['hasAttachment'] = false;
            }
            array_push($response, $row);
        }
        return $response;
    }

    public function getCard($cardID)
    {
        require_once('conn.php');
        $goodCardID = $conn->real_escape_string($cardID);
        $stmt = $conn->prepare('SELECT c.cardID, c.username, u.avatarURL, c.content, c.attachmentURL FROM Card c LEFT JOIN User u ON c.username=u.username WHERE cardID=?;');
        $stmt->bind_param('i', $goodCardID);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = mysqli_fetch_array($result);
        $stmt->close();
        if (isset($row['attachmentURL']) && $row['attachmentURL'] != '') {
            unset($row['attachmentURL']);
            $row['hasAttachment'] = true;
        } else {
            unset($row['attachmentURL']);
            $row['hasAttachment'] = false;
        }
        if ($row) {
            return $row;
        }
        return;
    }

    public function addCard($content, $attachment)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return false;
        }

        $attachmentURL = '';
        if (isset($attachment)) {
            $fileName = $attachment['name'];
            $tempPath = $attachment['tmp_name'];
            $fileSize = $attachment['size'];
            if (empty($fileName) || filesize($tempPath) > 1000000) {
                return false;
            }
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

            $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;

            //$uploadPath = '/home/fluffypony/uploadedFile/';
            $uploadPath = '/home/albert/uploadedFile/';

            while (file_exists($uploadPath . $fileName)) {
                $fileName = bin2hex(random_bytes(20)) . '.' . $fileExtension;
            }
            move_uploaded_file($tempPath, $uploadPath . $fileName);
            $attachmentURL = $uploadPath . $fileName;
        }

        $goodUsername = $conn->real_escape_string($data['username']);
        $goodContent = $conn->real_escape_string($content);
        $goodAttachmentURL = $conn->real_escape_string($attachmentURL);
        $stmt = $conn->prepare('INSERT INTO Card (username, content, attachmentURL) VALUES (?, ?, ?);');
        $stmt->bind_param('sss', $goodUsername, $goodContent, $goodAttachmentURL);
        $stmt->execute();
        if ($stmt->affected_rows === 0) {
            exit('{"error": "No rows inserted"}');
        }
        $stmt->close();
        return true;
    }

    public function deleteCard($cardID)
    {
        require_once('conn.php');
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            return false;
        }
        $goodUsername = $conn->real_escape_string($data['username']);
        $goodCardID = $conn->real_escape_string($cardID);
        $stmt = $conn->prepare('SELECT * FROM Card WHERE cardID=? AND username=?;');
        $stmt->bind_param('ss', $goodCardID, $goodUsername);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = mysqli_fetch_array($result);
        if (!$row) {
            return false;
        }
        $stmt = $conn->prepare('DELETE FROM Card WHERE cardID=? AND username=?;');
        $stmt->bind_param('ss', $goodCardID, $goodUsername);
        $stmt->execute();
        $stmt->close();
        return true;
    }

    public function downloadAttachment($cardID)
    {
        require_once('conn.php');

        $goodCardID = $conn->real_escape_string($cardID);
        $stmt = $conn->prepare('SELECT * FROM Card WHERE cardID=?;');
        $stmt->bind_param('s', $goodCardID);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = mysqli_fetch_array($result);
        if (!$row) {
            return false;
        }
        $attachmentURL = $row['attachmentURL'];
        return $attachmentURL;
    }
}
