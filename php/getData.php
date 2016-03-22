<?php

if(isset($_COOKIE['username'])) {

    $username = $_COOKIE['username'];
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
 
        $row = $result->fetch_assoc();
        
        $score = $row["score"];       
        $gamesPlayed = $row["gamesPlayed"];
        $gamesWon = $row["gamesWon"];
        $gamesLost = $row["gamesLost"];
        
        setcookie("score", $score);         
        setcookie("gamesPlayed", $gamesPlayed); 
        setcookie("gamesWon", $gamesWon);
        setcookie("gamesLost", $gamesLost);                 
        
    } else {
        echo "Username or Password is invalid";
    }
    $conn->close();     
} else {

      echo "Cookie named '" . $cookie_name . "' is not set!";      
}

?>
