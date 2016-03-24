<?php
session_start();

if (isset($_POST["submit"])) {
    if (empty($_POST["username"]) || empty($_POST["password1"])) {
        $_SESSION["error"] = "Username or Password is empty";
    } else {
        if ($_POST["password1"] == $_POST["password2"]) {

            $username = $_POST["username"];
            $password = $_POST["password1"];

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

            $sql = "SELECT * FROM users WHERE username = '$username'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $_SESSION["error"] = "Username already taken";
                $conn->close();              
            } else {
                // create new user in database
                $sql = "INSERT INTO users (username, password, gamesPlayed, gamesWon, gamesLost)
                        VALUES ('$username', '$password', '0', '0', '0')";

                if ($conn->query($sql) === TRUE) {
                    header("Location: ../index.php");
                } else {
                    $_SESSION["error"] = "Couldn't create new user";
                }
                $conn->close();
                exit();
            }
        } else {
            $_SESSION["error"] = "Passwords do not match";
        }
    }
}
?>