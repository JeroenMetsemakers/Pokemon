$(document).ready(function () {
    $("#inlogForm").hide();
    $("#startGameButton").click(function () {
        $("#startGameButton").fadeOut();

        setTimeout(function () {
            $("#container").css("background-image", "url(gif/gameboy/Startup.gif)");
        }, 500);
        setTimeout(function () {
            $("#container").css("background-image", "url('')");
        }, 4500);
        setTimeout(function () {
            $("#inlogForm").fadeIn();
        }, 5000);
    });
});

inlogForm