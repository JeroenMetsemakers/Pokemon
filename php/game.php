<?php
session_start();
$_SESSION["error"] = "";

if (isset($_SESSION["username"])) {   
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
            <script src="../js/jquery/jquery-2.1.4.js"></script>      
            <script src="../js/game.js"></script>
        </head>
        <body>
            <section id="container">
                <section id="console">
                    <article id="consoleInfo">
                        <article id="enemyName"></article>                   
                        <article id="showConsoleHP" class="status"></article>
                    </article>
                    <article id="consolePokemon"></article>                    
                </section>
                <article id="main"> 
                    <form id="startForm">
                        <select id="playerPokemonChoice" name="playerPokemonChoice">
                            <option value="bulbasaur">Bulbasaur</option>
                            <option value="charizard">Charizard</option>
                            <option value="pikachu">Pikachu</option>
                        </select>
                    </form>

                    <button class="mainButton" id="startFightButton">Start Fight</button>                    
                </article>
                <section id="player">
                    <section id="plTop">
                        <article id="playerPokemon"></article> 
                        <article id="playerInfo">
                            <article id="partay"></article>                         
                            <article id="showPlayerHP" class="status"></article>                    
                        </article> 
                    </section>
                    <section id="plBottom">
                        <article id="playerAction">
                            <article id="textField"></article>
                        </article>  
                        <article id="playerControl">

                            <button class="attackButton" id="attack1" value="1" >One</button>
                            <button class="attackButton" id="attack2" value="2" >Two</button>           
                            <button class="attackButton" id="attack3" value="3" >Three</button>
                            <button class="attackButton" id="attack4" value="4" >Four</button>                         

                            <button class="inactiveButton" id="inactive1" value="1" >One</button>
                            <button class="inactiveButton" id="inactive2" value="2" >Two</button>           
                            <button class="inactiveButton" id="inactive3" value="3" >Three</button>
                            <button class="inactiveButton" id="inactive4" value="4" >Four</button>                                           
                        </article> 
                        <article style="clear"></article>
                    </section>
                </section>
            </section>
        </body>
    </html>


    <?php
} else {
    header("location: ../index.php");
}
?>
