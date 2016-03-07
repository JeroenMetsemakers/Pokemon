                                function StartGame() {

                                    document.getElementById("EnemyImage").innerHTML = '<img src=\'img/characters/Giovani.png\'>';

                                    setTimeout(function () { document.getElementById("TextLine1").innerHTML = "<strong>Giovani</strong> wants to battle!!<br />"; }, 1000);

                                    setTimeout(function () { document.getElementById("TextLine1").innerHTML = "<strong>Giovani</strong> sents out "; }, 2000);

                                    var x = Math.floor((Math.random() * 6) + 1);
                                    if (x == 1) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Charmander "; }, 2000);
                                        setTimeout(function () { document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Charmander.png\'>'; }, 2500);
                                    }
                                    if (x == 2) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Squirtle "; }, 2000);
                                        setTimeout(function () { document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Squirtle.png\'>'; }, 2500);
                                    }
                                    if (x == 3) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Ivysaur "; }, 2000);
                                        setTimeout(function () { document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Ivysaur.png\'>'; }, 2500);
                                    }
                                    if (x == 4) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Haunter "; }, 2000);
                                        setTimeout(function () {document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Haunter.png\'>'; }, 2500);
                                    }
                                    if (x == 5) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Alakazam "; }, 2000);
                                        setTimeout(function () {document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Alakazam.png\'>'; }, 2500);
                                    }
                                    if (x == 6) {
                                        setTimeout(function () { document.getElementById("PokemonName").innerHTML = "Machamp "; }, 2000);
                                        setTimeout(function () {document.getElementById("PokemonImage").innerHTML = '<img src=\'img/pokemon/Machamp.png\'>'; }, 2500);
                                    }

                                    setTimeout(function () { document.getElementById("TextLine3").innerHTML = "!!"; }, 2000);

                                    setTimeout(function () { document.getElementById("Textline4").innerHTML = "What would you like to do?"; }, 3000);

                                    setTimeout(function () { document.getElementById("Textline5").innerHTML = "<button>fight</button> <button>run</button>"; }, 4000);

                                    document.getElementById("StartButton").remove();
                                }
