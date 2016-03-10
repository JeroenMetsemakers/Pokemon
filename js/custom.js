$(document).ready(function () {

    // Declareer alle (globale) variabelen
    var hp_player = 100;
    var hp_console = 100;
    var turn = true;

    var playerName = "Player";
    var consoleName = "Giovanni";

    var playerPokemon = "Default";
    var consolePokemon = "Default";


    // Declareer alle (globale) functies
    var time_out = function (elem_id, delayms, input) {
        setTimeout(function () {
            $(elem_id).append(input);
        }, delayms);
    };
   

    $("#startFightButton, #startForm, #console, #player").hide();


    // Begin met invoeren van naam en pokemon
    $("#startGameButton").click(function () {

        $("#startGameButton").hide();
        $("#startFightButton, #startForm").show();

    });

    // Begin het gevecht na selecteren van naam en pokemon
    $("#startFightButton").click(function () {

        playerName = $("#playerName").val();
        playerPokemon = $("#playerPokemonChoice option:selected").text();

        $("#startFightButton, #startForm").hide();
        $("#console, #player").show();        

        // Op basis van keuze speler de betreffende pokemon(naam) inladen      
        switch (playerPokemon) {
           
            case "Onix" :
                $("#playerInfo").append("Onix");
                $("#playerPokemon").append("<img src=\'img/pokemon/Charmander.png\'>");
                break;
                
            case "Squirtle" :
                $("#playerInfo").append("Squirtle");
                $("#playerPokemon").append("<img src=\'img/pokemon/Squirtle.png\'>");                
                break;
                
            case "Pickachu" :
                $("#playerInfo").append("Pickachu");
                $("#playerPokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");                   
                break;
        }


        // Console genereert random een pokemon om mee te vechten
        var x = Math.round(Math.random() * 2) + 1;

        switch (x) {
            case 1 :
                $("#consoleInfo").append("Onix");
                $("#consolePokemon").append("<img src=\'img/pokemon/Charmander.png\'>");
                break;
                
            case 2 :
                $("#consoleInfo").append("Squirtle");
                $("#consolePokemon").append("<img src=\'img/pokemon/Squirtle.png\'>");                
                break;
                
            case 3 :
                $("#consoleInfo").append("Pickachu");
                $("#consolePokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");                   
                break;
        }

        $("#consoleInfo").append("<h1>" + consoleName + ": </h1><br/>");
        $("#consoleInfo").append(hp_console + ", ");

        $("#playerInfo").append("<h1>" + playerName + ": </h1><br/>");
        $("#playerInfo").append(hp_player + ", ");
        
        $("#playerAction").append("<p>What will " + playerPokemon + " do?</p><br/>");
        


        //Zolang beide spelers leven hebben ze om en om een beurt (turn = true / false)
        while (hp_player >= 0 || hp_console >= 0) {
            if (turn) {
                hp_console = hp_console - 20;
                $("#consoleInfo").append(hp_console + ", ");
                if (hp_console < 1) {
                    break;
                }
                console.log(hp_console);
                turn = false;
            } else {
                hp_player = hp_player - 20;
                $("#playerInfo").append(hp_player + ", ");
                if (hp_player < 1) {
                    break;
                }
                console.log(hp_player);
                turn = true;
            }
            ;
        }
        ;


        //Zodra een van de spelers dood is voer deze code uit
        if (hp_player <= 1) {
            console.log("Console won! You lost!");
            time_out("#consoleInfo", 1000, "<br/>" + consoleName + " won! You lost!");

        } else if (hp_console <= 1) {
            console.log("You won! Console lost!");
            time_out("#playerInfo", 1000, "<br/>You won! " + consoleName + " lost! <br/>Your score = " + hp_player);
        }
    });
});      