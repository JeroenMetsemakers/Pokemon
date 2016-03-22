<?php

$cookie_name = 'username';
unset($_COOKIE[$cookie_name]);

header("Location: ../index.php");
?>