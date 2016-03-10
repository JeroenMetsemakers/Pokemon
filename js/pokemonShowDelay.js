$(document).ready(function () {
    $("#StartButton").click(function () {


        var time_out = function (elem_id, delayms, input) {
            setTimeout(function () {
                $(elem_id).html(input);
            }, delayms);
        };


        $("#EnemyImage").html("<img src=\'img/characters/Giovani.png\'>");
        setTimeout(function () {
            document.getElementById("TextLine1").innerHTML = "<strong>Giovani</strong> wants to battle!!<br />";
        }, 1000);

        setTimeout(function () {
            document.getElementById("TextLine1").innerHTML = "<strong>Giovani</strong> sents out ";
        }, 2000);

        var x = Math.round(Math.random() * 2) + 1;
        console.log(x);

        switch (x) {
            case 1 :
                time_out("#PokemonName", 2000, "Onix");
                time_out("#PokemonImage", 2500, "<img src=\'img/pokemon/Charmander.png\'>");
                break;
            case 2 :
                time_out("#PokemonName", 2000, "Squirtle");
                time_out("#PokemonImage", 2500, "<img src=\'img/pokemon/Squirtle.png\'>");                
                break;
            case 3 :
                time_out("#PokemonName", 2000, "Pickachu");
                time_out("#PokemonImage", 2500, "<img src=\'img/pokemon/Alakazam.png\'>");     

                break;
        }


        setTimeout(function () {
            document.getElementById("TextLine3").innerHTML = "!!";
        }, 2000);

        setTimeout(function () {
            document.getElementById("Textline4").innerHTML = "What would you like to do?";
        }, 3000);

        setTimeout(function () {
            document.getElementById("Textline5").innerHTML = "<button>fight</button> <button>run</button>";
        }, 4000);

        document.getElementById("StartButton").remove();
    });
});