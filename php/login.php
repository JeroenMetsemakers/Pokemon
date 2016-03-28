<?php
session_start();
$_SESSION["error"] = "";

if (isset($_POST["submit"])) {
    if (empty($_POST["username"]) || empty($_POST["password"])) {
        $_SESSION["error"] = "Username or Password is invalid";
    } else {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $username = stripslashes($username);
        $password = stripslashes($password);
//        $username = mysqli_real_escape_string($username);
//        $password = mysqli_real_escape_string($password);
        $password = md5($password);
        
    include 'dbconnect.php';

        $sql = "SELECT username FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            $_SESSION["username"] = $username;
            header("Location: php/main.php");
            exit();
        } else {
            $_SESSION["error"] = "Username or Password is invalid";
        }
        $conn->close();
    }
}
?>