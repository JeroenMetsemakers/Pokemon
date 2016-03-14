$(document).ready(function () {

    /// Declareer alle (globale) variabelen ////////////////////////////////////
    var hp_player = 100;
    var hp_console = 100;
    var turn = true;

    var playerName = "Player";
    var consoleName = "Giovanni";

    var playerPokemon = "Default";
    var consolePokemon = "Default";

    var attack = "";


    //// Declareer alle (globale) functies /////////////////////////////////////

    var time_out = function (elem_id, delayms, input) {
        setTimeout(function () {
            $(elem_id).append(input);
        }, delayms);
    };
    
    var win_alert = function (delayms, input) {
        setTimeout(function () {
            alert(input);
        }, delayms);
    };    
   
    var delay_turn = function (delayms, input) {
        setTimeout(function () {
            turn = (input);
        }, delayms);
    };     

    var CountDown = function (HP, attack, time) {
        var HP_remaining = HP - attack;
        var timestep = time / attack;
        var counter = 0;
        var sleepyAlert = setInterval(function () {
            
            $("#showConsoleHP").html(HP - Math.round(counter / timestep));     
            if (Math.round(counter) === time) {
                clearInterval(sleepyAlert);
            }
            counter += timestep;
        }, timestep);
    };

    
    $("#startFightButton, #startForm, #console, #player").hide();

    /// Hier begint het spel ///////////////////////////////////////////////////
    /// Begin met invoeren van naam en pokemon /////////////////////////////////
    $("#startGameButton").click(function () {

        $("#startGameButton").hide();
        $("#startFightButton, #startForm").show();

    });

    // Begin het gevecht na selecteren van naam en pokemon /////////////////////
    $("#startFightButton").click(function () {

        playerName = $("#playerName").val();
        playerPokemon = $("#playerPokemonChoice option:selected").val();

        $("#startFightButton, #startForm").hide();
        $("#console, #player").show();

        // Op basis van keuze speler de betreffende pokemon(naam) inladen //////    
        switch (playerPokemon) {

            case "onix" :
                $("#playerInfo").append("Onix");
                $("#playerPokemon").append("<img src=\'img/pokemon/Charmander.png\'>");
                break;

            case "squirtle" :
                $("#playerInfo").append("Squirtle");
                $("#playerPokemon").append("<img src=\'img/pokemon/Squirtle.png\'>");
                break;

            case "pickachu" :
                $("#playerInfo").append("Pickachu");
                $("#playerPokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");
                break;
        }


        // Console genereert random een pokemon om mee te vechten //////////////
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
        $("#showConsoleHP").html(hp_console);

        $("#playerInfo").append("<h1>" + playerName + ": </h1><br/>");
        $("#showPlayerHP").html(hp_player);

        $("#playerAction").append("<p>What will " + playerPokemon + " do?</p><br/>");



        //Zolang beide spelers leven hebben ze om en om een beurt (turn = true / false)

        $(".attackButton").click(function () {

            if (turn === true && hp_player > 0 && hp_console > 0) {

                attack = $(this).val();
                switch (attack) {
                    case "1" :
                        attack = 50;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000);
                            win_alert(1500, "You won!!");
                            
                        } else {
                            CountDown(hp_console + attack, attack, 1000);

                        }
                        break;

                    case "2" :
                        attack = 30;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000);
                            win_alert(1500, "You won!!");
                            
                        } else {
                            CountDown(hp_console + attack, attack, 1000);
                        }
                        break;

                    case "3" :
                        attack = 20;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000);
                            win_alert(1500, "You won!!");
                            
                        } else {
                            CountDown(hp_console + attack, attack, 1000);
                        }
                        break;

                    case "4" :
                        attack = 10;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000);
                            win_alert(1500, "You won!!");
                            
                        } else {
                            CountDown(hp_console + attack, attack, 1000);
                        }
                        break;
                }
            } else {
                
                //Computer is aan de beurt
                //Math.random select aanval
                alert("Console's turn bitch!!");
                //Cases naar gelang gekozen aanval
                //Zelfde logica als hierboven

            };
        });
    });
});      