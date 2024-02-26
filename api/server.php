<?php

header("Access-Control-Allow-Origin: *");

$serverName = "localhost";
$userName = "root";
$password = "";
$dataBaseName = "feesManager";


$conn = new mysqli($serverName, $userName, $password, $dataBaseName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $admNo = $_POST['admNo'];
    $phone = $_POST['phone'];

    $sql = "INSERT INTO Students (Name,Email,AdmNo,Phone) VALUES ('$name', '$email', '$admNo', '$phone')";

    $res = $conn->query($sql);
    if ($res) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


        $conn->close();
?>