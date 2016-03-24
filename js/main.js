$(document).ready(function () {
    
    $.getJSON('../php/sendData.php', function (data) {

        $.each(data, function (key, val) {

            username = val.username;
            score = val.score;
            gamesPlayed = val.gamesPlayed;
            gamesWon = val.gamesWon;
            gamesLost = val.gamesLost;

            $('#container').append('<br/>Welkom ' + username + '<br/>Score:  ' + score + '<br/>Games played: ' + gamesPlayed + '<br/>Games won: ' + gamesWon + '<br/>Games lost: ' + gamesLost);

        });
    });

        $.getJSON('../php/getTop.php', function (data) {
              
        $.each(data, function (key, val) {

            topuser = val.username;
            topscore = val.score;

            $('#list').append('<li>' + topuser + ' -- ' + 'Score: ' + topscore + '</li>');

        });
    });


});