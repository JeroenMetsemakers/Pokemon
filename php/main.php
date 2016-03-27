<?php
    include('getData.php');
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
        <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js'></script>        
        <script src="../js/main.js"></script>        
    </head>
    <body>
        <section id="MainContainer">
            <article id="overall"></article>
            <article id="topUsers"></article>            
            <article id="pokebuttons">
                <a href="game.php"><button>Play game</button></a>
                <a href="logout.php"><button>Log out</button></a>  
            </article>
            <ul id="list"></ul>
        </section>
    </body>
</html>
