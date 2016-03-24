<?php

session_start();
if (isset($_SESSION["username"])) {

    /* set out document type to text/javascript instead of text/html */
    header("Content-type: text/javascript");

    /* our multidimentional php array to pass back to javascript via ajax */
    $arr = array(
        array(
            "username" => $_SESSION["username"],
            "score" => $_SESSION["score"],
            "gamesPlayed" => $_SESSION["gamesPlayed"],
            "gamesWon" => $_SESSION["gamesWon"],
            "gamesLost" => $_SESSION["gamesLost"],
        )
    );

    echo json_encode($arr);
}
?>