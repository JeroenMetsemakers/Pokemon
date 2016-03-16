$(document).ready(function () {
    var hp_player = 100;
    var hp_console = 100;
    var turn = true;
    var playerName = "Player";
    var consoleName = "Giovanni";
    var playerPokemon = "Default";
    var consolePokemon = "Default";
    var attack = "";

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

    var playerAttack = function (pl_pokemon, cs_pokemon) {
        $("#container").animate({backgroundPositionX: "-=200px"}).delay(3000).animate({backgroundPositionX: "+=200px"});
        $("#playerPokemon").html("<img class='mirror' src=\'gif/pokemon/" + pl_pokemon + "/front.gif\'>").delay(1000)
                .show(function () {
                    $(this).html("<img class='mirror' src=\'gif/pokemon/" + pl_pokemon + "/attack1.gif'>");
                }).delay(1600)
                .show(function () {
                    $(this).html("<img class='mirror' src=\'gif/pokemon/" + pl_pokemon + "/front.gif'>");
                }).delay(1000)
                .show(function () {
                    $(this).html("<img src=\'gif/pokemon/" + pl_pokemon + "/back.gif'>");
                }).delay(1000);
        $("#consolePokemon").html("<img class='mirror' src=\'gif/pokemon/" + cs_pokemon + "/back.gif\'>").delay(3600)
                .show(function () {
                    $(this).html("<img src=\'gif/pokemon/" + cs_pokemon + "/front.gif'>");
                }).delay(1000);
    };

    var consoleAttack = function (cs_pokemon) {
        console.log(cs_pokemon);
        $("#consolePokemon").html("<img src=\'gif/pokemon/" + cs_pokemon + "/attack1.gif\'>").delay(2000)
                .show(function () {
                    $(this).html("<img src=\'gif/pokemon/" + cs_pokemon + "/front.gif'>");
                });
    };

    var console_turn = function () {
        var consoleAction = 1;

        switch (consoleAction) {
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
                    setTimeout(function () {                    
                        CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    }, 2000);                   
                    consoleAttack(consolePokemon);
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 4000);
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

    $("#startGameButton").click(function () {
        $("#startGameButton").hide();
        $("#startFightButton, #startForm").show();
    });

    $("#startFightButton").click(function () {
        playerName = $("#playerName").val();
        playerPokemon = $("#playerPokemonChoice option:selected").text();
        $("#startFightButton, #startForm").hide();
        $("#console, #player").show();

        switch (playerPokemon) {
            case "Bulbasaur" :
                $("#playerInfo").append("Bulbasaur");
                $("#playerPokemon").append("<img src=\'gif/pokemon/Bulbasaur/back.gif\'>");
                break;

            case "Charizard" :
                $("#playerInfo").append("Charizard");
                $("#playerPokemon").append("<img src=\'gif/pokemon/Charizard/front.gif\'>");
                break;

            case "Pikachu" :
                $("#playerInfo").append("Pikachu");
                $("#playerPokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");
                break;
        }

        var x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1 :
                $("#consoleInfo").append("Bulbasaur");
                consolePokemon = "Bulbasaur";
                $("#consolePokemon").append("<img src=\'gif/pokemon/bulbasaur/front.gif\'>");
                break;

            case 2 :
                $("#consoleInfo").append("Charizard");
                consolePokemon = "Charizard";
                $("#consolePokemon").append("<img src=\'gif/pokemon/charizard/front.gif\'>");
                break;

            case 3 :
                $("#consoleInfo").append("Pikachu");
                consolePokemon = "Pikachu";
                $("#consolePokemon").append("<img src=\'img/pokemon/Alakazam.png\'>");
                break;
        }

        $("#consoleInfo").append("<h1>" + consoleName + ": </h1><br/>");
        $("#showConsoleHP").html("<progress value='" + hp_console + "' max='100'></progress> 100");
        $("#playerInfo").append("<h1>" + playerName + ": </h1><br/>");
        $("#showPlayerHP").html("<progress value='" + hp_player + "' max='100'></progress> 100");
        $("#playerAction").append("<p>What will " + playerPokemon + " do?</p>");

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
                            win_alert(1000, "You won!!<br/> Your score is " + hp_player);
                        } else {
                            setTimeout(function () {
                                CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                            }, 4000);

                            playerAttack(playerPokemon, consolePokemon);

                            setTimeout(function () {
                                console_turn();
                            }, 6000);
                        }
                        break;
                }
            } else {
                alert("One of you is already dead :/");
            }
            ;
        });
    });
});      