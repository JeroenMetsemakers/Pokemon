<?php

session_start();
if (isset($_SESSION["username"])) {

    $servername = "localhost";
    $dbuser = "root";
    $dbpass = "usbw";
    $dbname = "Pokemon";
    $_SESSION["topuser"] = "default";
    $_SESSION["topscore"] = "default";

    $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT username, score FROM users";
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {
        echo $row['username'] . '<br />';
    }



    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $_SESSION["topuser"] = $row["username"];
            $_SESSION["topscore"] = $row["score"];
        }
    } else {
        $_SESSION["error"] = "Username or Password is invalid";
    }
    $conn->close();
    /* set out document type to text/javascript instead of text/html */
    header("Content-type: text/javascript");

    /* our multidimentional php array to pass back to javascript via ajax */
    $arr = array(
        array(
            "topuser" => $_SESSION["topuser"],
            "topscore" => $_SESSION["topscore"],
        )
    );

    echo json_encode($arr);
}
?>