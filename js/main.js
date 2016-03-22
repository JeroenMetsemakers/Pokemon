$(document).ready(function () {
$( "#logout" ).click(function() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    $(location).attr('href', '../index.php');        
});
    
    
    var username = getCookie("username");   
    var score = getCookie("score");    
    var gamesPlayed = getCookie("gamesPlayed");
    var gamesWon = getCookie("gamesWon");    
    var gamesLost = getCookie("gamesLost");    

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(cname) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }
    $("#container").append("<br/><h1>Welkom " + username) + "</h1>";
    $("#container").append("<br/>Score: " + score);   
    $("#container").append("<br/>Games played: " + gamesPlayed);
    $("#container").append("<br/>Games won: " + gamesWon);
    $("#container").append("<br/>Games lost: " + gamesLost);    

}); 