<?php
include ("registeruser.php");
if(isset($_SESSION["username"])){
    header("location: game.php");
}
?>
<!DOCTYPE html>
<html>
    <head>        
        <title>Pokemon</title>
        <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">        
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="../css/reset.css" />
        <link rel="stylesheet" href="../css/custom.css" />    
    </head>
    <body>
        <section id="container" class="regcontainer">
            <article id="regform">
                <form action="" method="post">
                    <label >UserName:</label><br/>
                    <input id="name" name="username" type="text"><br/>
                    <label>Password:</label><br/>
                    <input id="password1" name="password1" type="password"><br/>
                    <label>Confirm password:</label><br/>
                    <input id="password2" name="password2" type="password"><br/> 
                    <button class="btn" name="submit" type="submit">Register</button>                    
                    <!--<input name="submit" type="submit" value=" Register ">-->
                    <a class="link" href="../index.php">Back</a>                                            
                </form> 
            </article>
                    <?php if(isset($_SESSION["error"])) {echo $_SESSION["error"];}; ?></span>               
        </section>
    </body>
</html>
