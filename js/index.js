$(document).ready(function () {
    $("#inlogForm").hide();
    $(".power").click(function () {
        $("#container").css("background-image", "url(gif/gameboy/Startup.gif)");

        setTimeout(function () {
            $("#container").css("background-image", "url('img/background/inlog.png')");
        }, 4500);
        setTimeout(function () {
            $("#inlogForm").fadeIn();
        }, 5200);
    });
});
