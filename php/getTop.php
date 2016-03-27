<?php

session_start();
if (isset($_SESSION["username"])) {
    
    $username = $_SESSION['username'];
    
    $servername = "localhost";
    $dbuser = "root";
    $dbpass = "usbw";
    $dbname = "Pokemon";
    $arr = array();

    $conn = new mysqli($servername, $dbuser, $dbpass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT username, score FROM users ORDER BY score DESC limit 5";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        $results = array();
        while($row = mysqli_fetch_assoc($result))
        {
            
            $results = $row["username"];
            $results = $row["score"];            
            $results = $row;
        }        
 

        
        
        
    } else {
        $_SESSION["error"] = "Username or Password is invalid";
    }
    $conn->close();
    
    
    
    
    
    
    

    /* set out document type to text/javascript instead of text/html */
    header("Content-type: text/javascript");

    /* our multidimentional php array to pass back to javascript via ajax */


    echo json_encode($results);
}
?>