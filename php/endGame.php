<?php

include 'dbconnect.php';
$jsonString = $_POST["formjson"];

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
        
       echo "Data saved";
    } else {
        echo "Couldn't save data";
    }
    $conn->close();
    exit();
}
?>