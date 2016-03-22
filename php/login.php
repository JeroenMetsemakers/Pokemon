<?php


$error = "";

if (isset($_POST["logout"])) {
    $cookie_name = 'username';
    unset($_COOKIE[$cookie_name]);
    // empty value and expiration one hour before
    $res = setcookie($cookie_name, '', time() - 3600);    
}

if (isset($_POST["submit"])) {
    if (empty($_POST["username"]) || empty($_POST["password"])) {
        $error = "Username or Password is invalid";
    } else {
        
        $username = $_POST["username"];
        $password = $_POST["password"];

        $username = stripslashes($username);
        $password = stripslashes($password);
//        $username = mysqli_real_escape_string($username);
//        $password = mysqli_real_escape_string($password);
        $password = md5($password);
        
        $servername = "localhost";
        $dbuser = "root";
        $dbpass = "usbw";
        $dbname = "Pokemon";

        $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT username FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $cookie_name = "username";
            $cookie_value = $username;
            setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day           

            
            header("Location: php/main.php");
            exit();
        } else {
            $error = "Username or Password is invalid";
        }
        $conn->close();
    }
}
?>