<?php
include("php/login.php");
if (isset($_SESSION["username"])) {
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
        <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js'></script>        
        <script src="js/jquery/jquery-2.1.4.js"></script>      
        <script src="js/index.js"></script>                
    </head>
    <body>
        <section id="container" class="power">            
            <article id="inlogForm">
                <form action="" method="post">
                    <label >UserName :</label><br/>
                    <input id="name" name="username" type="text" autofocus><br/>
                    <label>Password :</label><br/>
                    <input id="password" name="password" type="password"><br/>              
                    <button class="btn" name="submit" >Log in</button>
                    <a class="link" href="php/register.php">Register</a>
                </form>
            </article>  
            <?php if (isset($_SESSION["error"])) {echo $_SESSION["error"]; } ?></span>       
    </section>
</body>
</html>
