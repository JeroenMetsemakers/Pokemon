<?php
session_start();


session_unset(); 
session_destroy();
echo "logged out";
header("Location: ../index.php");
?>