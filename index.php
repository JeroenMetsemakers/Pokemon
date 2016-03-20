<?php
include("php/login.php");
if(isset($_SESSION["login_user"])){
    header("location: php/game.php");
}
?>
<!DOCTYPE html>
<html>
    <head>        
        <title>Pokemon</title>
        <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">        
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="css/reset.css" />
        <link rel="stylesheet" href="css/custom.css" />    
    </head>
    <body>
        <section id="container">
            <form action="" method="post">
                <label >UserName :</label><br/>
                <input id="name" name="username" type="text"><br/>
                <label>Password :</label><br/>
                <input id="password" name="password" type="password"><br/>
                <input name="submit" type="submit" value=" Login ">
                <a href="php/register.php">Register</a>
                <?php if(isset($_SESSION["error"])) {echo $_SESSION["error"];}; ?></span>
            </form>   
        </section>
    </body>
</html>
