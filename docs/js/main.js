$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 70) {
            $("#header").css('background', 'rgba(0,0,0,0.95)');
        } else {
            $("#header").css("background", 'transparent');
        }
    });
});