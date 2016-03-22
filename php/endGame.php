<?php

if (isset($_COOKIE['username'])) {
    $username = $_COOKIE["username"];
    $score = $_COOKIE["score"];    
    $gamesPlayed = $_COOKIE["gamesPlayed"];
    $gamesWon = $_COOKIE["gamesWon"];
    $gamesLost = $_COOKIE["gamesLost"];

    $servername = "localhost";
    $dbuser = "root";
    $dbpass = "usbw";
    $dbname = "Pokemon";  

    $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "UPDATE users
    SET score='$score', gamesPlayed='$gamesPlayed', gamesWon='$gamesWon', gamesLost='$gamesLost'
    WHERE username='$username'";
    
    
    if ($conn->query($sql) === TRUE) {
        header("Location: main.php");
    } else {
        echo "Couldn't save data";
    }
    $conn->close();
    exit();
}
?>
