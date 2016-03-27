$(document).ready(function () {

    $.getJSON('../php/sendData.php', function (data) {

        $.each(data, function (key, val) {

            username = val.username;
            score = val.score;
            gamesPlayed = val.gamesPlayed;
            gamesWon = val.gamesWon;
            gamesLost = val.gamesLost;

            $('#overall').append('Score:  <br/>' + score + '<br/>Games played: <br/>' + gamesPlayed + '<br/>Games won: <br/>' + gamesWon + '<br/>Games lost: <br/>' + gamesLost);
            $("#topUsers").append("Welkom " + username);
        });
    });

//    $.getJSON('../php/getTop.php', function (data) {
//
//        $.each(data, function (key, val) {
//
//            topuser = val.username;
//            topscore = val.score;
//
//
//            $('#MainContainer').append('<br/>Welkom ' + topuser + '<br/>Score:  ' + topscore);
//
//        });
//    });


});