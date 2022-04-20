<?php

$json = file_get_contents('db/config.json');

$json_data = json_decode($json, true);
$databaseUsername = $json_data['username'];
$databasePassword = $json_data['password'];

$conn = new mysqli('localhost', $databaseUsername, $databasePassword, 'cardsDatabase');

if (!empty($conn->connect_error)) {
    die('Database connection failed: ' . $conn->connect_error);
}
