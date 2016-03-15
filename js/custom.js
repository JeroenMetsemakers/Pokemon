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

    var CountDown = function (HP, attack, time, location) {
        var HP_remaining = HP - attack;
        var timestep = time / attack;
        var counter = 0;
        var sleepyAlert = setInterval(function () {
            var HP_temp = HP - Math.round(counter / timestep);
            $(location).html("<progress value='" + HP_temp + "' max='100'></progress> " + HP_temp);

            if (Math.round(counter) === time) {
                clearInterval(sleepyAlert);
            }
            counter += timestep;
        }, timestep);
    };

    var console_turn = function () {
        var consoleAttack = Math.round(Math.random() * 3) + 1;
        switch (consoleAttack) {
            case 1 :
                console.log(consoleName + " kiest aanval 1");
                attack = 50;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                    win_alert(1500, consoleName + " won!!");
                } else {
                    console.log("case1Else");
                    CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 2000);
                }
                break;

            case 2 :
                console.log(consoleName + " kiest aanval 2");
                attack = 30;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                    win_alert(1500, consoleName + " won!!");
                } else {
                    console.log("case2Else");
                    CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 2000);
                }
                break;

            case 3 :
                console.log(consoleName + " kiest aanval 3");
                attack = 20;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                    win_alert(1500, consoleName + " won!!");
                } else {
                    console.log("case3Else");
                    CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();

                    }, 2000);
                }
                break;

            case 4 :
                console.log(consoleName + " kiest aanval 4");
                attack = 10;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                    win_alert(1500, consoleName + " won!!");
                } else {
                    console.log("case4Else");
                    CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();

                    }, 2000);
                }
                break;
        }
    };

    $("#startFightButton, #startForm, #console, #player, .inactiveButton").hide();

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

            case "pikachu" :
                $("#playerInfo").append("Pikachu");
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
                $("#consoleInfo").append("Pikachu");
                $("#consolePokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");
                break;
        }

        $("#consoleInfo").append("<h1>" + consoleName + ": </h1><br/>");
        $("#showConsoleHP").html("<progress value='" + hp_console + "' max='100'></progress> 100");
        $("#playerInfo").append("<h1>" + playerName + ": </h1><br/>");
        $("#showPlayerHP").html("<progress value='" + hp_player + "' max='100'></progress> 100");
        $("#playerAction").append("<p>What will " + playerPokemon + " do?</p>");

        //Zolang beide spelers leven hebben ze om en om een beurt (turn = true / false)
        $(".attackButton").click(function () {
            if (hp_player > 0 && hp_console > 0) {
                $(".attackButton").hide();
                $(".inactiveButton").show();

                attack = $(this).val();
                switch (attack) {
                    case "1" :
                        var missChance = Math.round(Math.random() * 4) + 1;
                        console.log(missChance);
                        if (missChance === 5) {
                            attack = 50;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                win_alert(1500, "You won!! <br/> Your score is " + hp_player);
                            } else {
                                CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                setTimeout(function () {
                                    console_turn();
                                }, 5000);
                            }
                        } else {
                            alert("You missed!!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;
                    case "2" :
                        var missChance = Math.round(Math.random() * 2) + 1;
                        console.log(missChance);
                        if (missChance === 3) {
                            attack = 30;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                win_alert(1500, "You won!!<br/> Your score is " + hp_player);
                            } else {
                                CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                setTimeout(function () {
                                    console_turn();
                                }, 5000);
                            }
                        } else {
                            alert("You missed!!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;

                    case "3" :
                        var missChance = Math.round(Math.random() * 2) + 1;
                        console.log(missChance);
                        if (missChance >= 2) {
                            attack = 20;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                win_alert(1500, "You won!!<br/> Your score is " + hp_player);
                            } else {
                                CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                setTimeout(function () {
                                    console_turn();
                                }, 5000);
                            }
                        } else {
                            alert("You missed!!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;

                    case "4" :
                        attack = 10;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                            win_alert(1500, "You won!!<br/> Your score is " + hp_player);
                        } else {
                            CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                            setTimeout(function () {
                                console_turn();
                            }, 5000);
                        }
                        break;
                }
            } else {
                alert("One of you is already dead :/");
            };
        });
    });
});      