$(function() {
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})

$('.title_a').hover(
    function over() {
        $(".title_arrow").css({"margin-right":"-80px", "margin-left":"40px", "opacity":"1"});
        $('.title_a').css("margin-left","-40px")
    },
    function leave() {
        $(".title_arrow").css({"margin-right":"0px", "margin-left":"0px", "opacity":"0"});
        $('.title_a').css("margin-left","40px");

    }
);