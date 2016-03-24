<?php

$servername = "localhost";
$username = "root";
$password = "usbw";
$dbname = "pokemon";

$jsonString = $_POST["formjson"];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$data = json_decode($jsonString);

foreach ($data as $d) {
   
    $username = ($d->username);
    $score = ($d->score);    
    $gamesPlayed = ($d->gamesPlayed);
    $gamesWon = ($d->gamesWon);
    $gamesLost = ($d->gamesLost);    

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