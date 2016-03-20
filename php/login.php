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
        $password = md5($password);
//        $username = mysqli_real_escape_string($username);
//        $password = mysqli_real_escape_string($password);

        $servername = "localhost";
        $dbuser = "root";
        $dbpass = "usbw";
        $dbname = "Pokemon";

        $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT username, gamesPlayed, gamesWon, gamesLost FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            $_SESSION["login_user"] = $username;

            while ($row = $result->fetch_assoc()) {
                $_SESSION["gamesPlayed"] = $row["gamesPlayed"];
                $_SESSION["gamesWon"] = $row["gamesWon"];
                $_SESSION["gamesLost"] = $row["gamesLost"];
            }
            header("Location: php/game.php");
            exit();
        } else {
            $_SESSION["error"] = "Username or Password is invalid";
        }
        $conn->close();
    }
}
?>