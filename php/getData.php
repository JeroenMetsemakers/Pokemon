<?php

session_start();
if (isset($_SESSION["username"])) {

    $username = $_SESSION['username'];
    
    $servername = "localhost";
    $dbuser = "root";
    $dbpass = "usbw";
    $dbname = "Pokemon";

    $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT score, gamesPlayed, gamesWon, gamesLost FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        $row = $result->fetch_assoc();        
        $_SESSION["score"] = $row["score"];     
        $_SESSION["gamesPlayed"] = $row["gamesPlayed"];
        $_SESSION["gamesWon"] = $row["gamesWon"];
        $_SESSION["gamesLost"] = $row["gamesLost"];
    } else {
        $_SESSION["error"] = "Username or Password is invalid";
    }
    $conn->close();
}
?>
