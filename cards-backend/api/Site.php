<?php

class Site
{
    public function getTitle()
    {
        require_once('conn.php');
        $result = $conn->query('SELECT * FROM Site;');
        $row = mysqli_fetch_array($result);
        if ($row) {
            return $row;
        }
        return "Wanna Say Something?";
    }

    public function updateTitle($account, $password, $title)
    {
        require_once('conn.php');
        $stmt = $conn->prepare('SELECT * FROM Admin WHERE account=?');
        $goodAccount = $conn->real_escape_string($account);
        $goodPassword = $conn->real_escape_string($password);
        $stmt->bind_param('s', $goodAccount);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        $row = mysqli_fetch_array($result);
        if ($row) {
            if (password_verify($goodPassword, $row['password'])) {
                $stmt = $conn->prepare('UPDATE Site SET Title=?;');
                $stmt->bind_param('s', $title);
                $stmt->execute();
                $stmt->close();
            } else {
                return false;
            }
        } else {
            return false;
        }
        return true;
    }
}
