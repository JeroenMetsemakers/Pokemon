$(document).ready(function () {
    $("#startButton").click(function () {

        var hp_player = 100;
        var hp_console = 100;
        var turn = true;
        
        var time_out = function (elem_id, delayms, input) {
            setTimeout(function () {
                $(elem_id).append(input);
            }, delayms);
        };        
         
        
        while (hp_player >= 0 || hp_console >= 0) {
            if (turn) {
                hp_console = hp_console - 20;
                time_out("#consoleInfo", 1000, hp_console);
                if (hp_console < 1) {
                    break;
                }
                console.log(hp_console);
                turn = false;
            } else {
                hp_player = hp_player - 20;
                time_out("#playerInfo", 1000, hp_console);                
                if (hp_player < 1) {
                    break;
                }
                console.log(hp_player);
                turn = true;
            }
            ;
        }
        ;
        if (hp_player <= 1) {
            console.log("Console won! You lost!");
            console.log("Console's score = " + hp_console);
        } else if (hp_console <= 1) {
            console.log("You won! Console lost!");
        }
    });
});      