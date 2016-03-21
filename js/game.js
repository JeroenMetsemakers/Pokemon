$(document).ready(function () {
    var hp_player = 100;
    var hp_console = 100;
    var turn = true;
    var consoleName = "Giovanni";
    var playerPokemon = "Default";
    var consolePokemon = "Default";
    var attack = "";

    var time_out = function (elem_id, delayms, input) {
        setTimeout(function () {
            $(elem_id).append(input);
        }, delayms);
    };

    var typing = function (string) {
        var string_dummy = "";
        var period = 35;
        var endTime = period * (string.length - 1);
        var counter = 0;

        var sleepyAlert = setInterval(function () {
            string_dummy = string_dummy.concat(string.charAt(0));
            $("#textField").html(string_dummy);
            if (counter === endTime) {
                clearInterval(sleepyAlert);
            }
            string = string.substr(1);
            counter += period;
        }, period);
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
        $("#container").animate({backgroundPositionX: "-=700px"}).delay(3000).animate({backgroundPositionX: "+=700px"});
        $("#playerPokemon").html("<img class='mirror' src=\'../gif/pokemon/" + pl_pokemon + "/front2.gif\'>").delay(1000)
                .show(function () {
                    $(this).html("<img class='mirror' src=\'../gif/pokemon/" + pl_pokemon + "/attack1.gif'>");
                }).delay(1600)
                .show(function () {
                    $(this).html("<img class='mirror' src=\'../gif/pokemon/" + pl_pokemon + "/front2.gif'>");
                }).delay(1000)
                .show(function () {
                    $(this).html("<img src=\'../gif/pokemon/" + pl_pokemon + "/back2.gif'>");
                }).delay(1000);
        $("#consolePokemon").html("<img class='mirror' src=\'../gif/pokemon/" + cs_pokemon + "/back.gif\'>").delay(3600)
                .show(function () {
                    $(this).html("<img src=\'../gif/pokemon/" + cs_pokemon + "/front2.gif'>");
                }).delay(1000);
    };

    var consoleAttack = function (cs_pokemon) {
        $("#consolePokemon").html("<img src=\'../gif/pokemon/" + cs_pokemon + "/attack1.gif\'>").delay(2000)
                .show(function () {
                    $(this).html("<img src=\'../gif/pokemon/" + cs_pokemon + "/front2.gif'>");
                });
    };

    var console_turn = function () {
        var consoleAction = Math.round(Math.random() * 3) + 1;

        switch (consoleAction) {
            case 1 :
                typing("Enemies " + consolePokemon + " uses attack One!");
                attack = 50;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    setTimeout(function () {
                        CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                        typing("It's super effective!");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    win_alert(3500, consoleName + " won!!");
                } else {
                    setTimeout(function () {
                        CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 4200);
                }
                break;

            case 2 :
                typing("Enemies " + consolePokemon + " uses attack Two!");
                attack = 30;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    setTimeout(function () {
                        CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                        typing("It's super effective!");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    win_alert(3500, consoleName + " won!!");
                } else {
                    setTimeout(function () {
                        CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 4200);
                }
                break;

            case 3 :
                typing("Enemies " + consolePokemon + " uses attack Three!");
                attack = 20;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    setTimeout(function () {
                        CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                        typing("It's super effective!");
                    }, 2000);

                    consoleAttack(consolePokemon);
                    win_alert(3500, consoleName + " won!!");
                } else {
                    setTimeout(function () {
                        CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();

                    }, 4200);
                }
                break;

            case 4 :
                typing("Enemies " + consolePokemon + " uses attack Four!");
                attack = 10;
                hp_player = hp_player - attack;
                if (hp_player <= 0) {
                    var hp_player_temp = hp_player + attack;
                    hp_player = 0;
                    setTimeout(function () {
                        CountDown(hp_player_temp, hp_player_temp, 1000, "#showPlayerHP");
                        typing("It's super effective!");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    win_alert(3500, consoleName + " won!!");
                } else {
                    setTimeout(function () {
                        CountDown(hp_player + attack, attack, 1000, "#showPlayerHP");
                    }, 2000);
                    consoleAttack(consolePokemon);
                    setTimeout(function () {
                        $(".inactiveButton").hide();
                        $(".attackButton").show();
                    }, 4200);
                }
                break;
        }
    };

    $("#console, #player, .inactiveButton").hide();
    $("#startForm").show();

       $("#startFightButton").click(function () {
        $("#container").css("background-image", "url(../img/background/bg.png)");
        playerPokemon = $("#playerPokemonChoice option:selected").text();
        $("#startFightButton, #startForm").hide();
        $("#console, #player").show();

        switch (playerPokemon) {
            case "Bulbasaur" :
                $("#partay").append("Bulbasaur");
                $("#playerPokemon").append("<img src=\'../gif/pokemon/Bulbasaur/back2.gif\'>");
                break;

            case "Charizard" :
                $("#partay").append("Charizard");
                $("#playerPokemon").append("<img src=\'../gif/pokemon/Charizard/front2.gif\'>");
                break;

            case "Pikachu" :
                $("#partay").append("Pikachu");
                $("#playerPokemon").append("<img src=\'../img/pokemon/Alakazam.png\'>");
                break;
        }

        var x = Math.round(Math.random() * 2) + 1;
        switch (x) {
            case 1 :
                $("#enemyName").append("Bulbasaur");
                consolePokemon = "Bulbasaur";
                $("#consolePokemon").append("<img src=\'../gif/pokemon/bulbasaur/front2.gif\'>");
                break;

            case 2 :
                $("#enemyName").append("Charizard");
                consolePokemon = "Charizard";
                $("#consolePokemon").append("<img src=\'../gif/pokemon/charizard/front.gif\'>");
                break;

            case 3 :
                $("#enemyName").append("Pikachu");
                consolePokemon = "Pikachu";
                $("#consolePokemon").append("<img src=\'../img/pokemon/Alakazam.png\'>");
                break;
        }

        $("#showConsoleHP").html("<progress value='" + hp_console + "' max='100'></progress> 100");
        $("#showPlayerHP").html("<progress value='" + hp_player + "' max='100'></progress> 100");
        $("#textField").html("<p>What will " + playerPokemon + " do?</p>");

        $(".attackButton").click(function () {
            if (hp_player > 0 && hp_console > 0) {
                $(".attackButton").hide();
                $(".inactiveButton").show();

                attack = $(this).val();
                switch (attack) {
                    case "1" :
                        var missChance = Math.round(Math.random() * 3) + 1;
                        if (missChance === 3) {

                            attack = 50;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                typing(playerPokemon + "'s attack was very effective!");
                                win_alert(1500, "You won!! <br/> Your score is " + hp_player);
                            } else {
                                typing(playerPokemon + " uses attack One!");
                                setTimeout(function () {
                                    CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                }, 4000);
                                playerAttack(playerPokemon, consolePokemon);
                                setTimeout(function () {
                                    console_turn();
                                }, 5500);
                            }
                        } else {
                            typing(playerPokemon + " missed attack One!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;

                    case "2" :
                        var missChance = Math.round(Math.random() * 2) + 1;
                        if (missChance === 3) {
                            attack = 30;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                typing(playerPokemon + "'s attack is very effective!");
                                win_alert(1500, "You won!!<br/> Your score is " + hp_player);
                            } else {
                                typing(playerPokemon + " uses attack Two!");
                                setTimeout(function () {
                                    CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                }, 4000);
                                playerAttack(playerPokemon, consolePokemon);
                                setTimeout(function () {
                                    console_turn();
                                }, 5500);
                            }
                        } else {
                            typing(playerPokemon + " missed attack Two!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;

                    case "3" :
                        var missChance = Math.round(Math.random() * 2) + 1;
                        if (missChance >= 2) {
                            attack = 20;
                            hp_console = hp_console - attack;
                            if (hp_console <= 0) {
                                var hp_console_temp = hp_console + attack;
                                hp_console = 0;
                                CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                                typing(playerPokemon + "'s attack is very effective!");
                                win_alert(1500, "You won!!<br/> Your score is " + hp_player);
                            } else {
                                typing(playerPokemon + " uses attack Three!");
                                setTimeout(function () {
                                    CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                                }, 4000);
                                playerAttack(playerPokemon, consolePokemon);
                                setTimeout(function () {
                                    console_turn();
                                }, 5500);
                            }
                        } else {
                            typing(playerPokemon + " missed attack Three!");
                            setTimeout(function () {
                                console_turn();
                            }, 2000);
                        }
                        break;

                    case "4" :
                        typing(playerPokemon + " uses attack Four!");
                        attack = 10;
                        hp_console = hp_console - attack;
                        if (hp_console <= 0) {
                            var hp_console_temp = hp_console + attack;
                            hp_console = 0;
                            CountDown(hp_console_temp, hp_console_temp, 1000, "#showConsoleHP");
                            typing(playerPokemon + "'s attack is very effective!");
                            win_alert(1000, "You won!!<br/> Your score is " + hp_player);
                        } else {
                            setTimeout(function () {
                                CountDown(hp_console + attack, attack, 1000, "#showConsoleHP");
                            }, 4000);
                            playerAttack(playerPokemon, consolePokemon);
                            setTimeout(function () {
                                console_turn();
                            }, 5500);
                        }
                        break;
                }
            } else {
                alert("One of you is already dead");
            }
            ;
        });
    });
});      