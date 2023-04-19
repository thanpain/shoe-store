// preloader
function preloader() {
    $("#preloader").delay(1000).fadeOut();
}
$(window).on('load', function() {
    preloader();
    mainSlider();
    aosAnimation();
    wowAnimation();
});

// top
const offSet = 500; // khi kéo xuống 500px thì sẽ hiện nút top
const time = 500; // sét cho nó mỗi lần trượt lên là 0.5s

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offSet) {
            $("#top-up").fadeIn(time);
        } else {
            $("#top-up").fadeOut(time);
        }
    });
    
    $("#top-up").click(function () {
        $("body, html").animate({ scrollTop: 0 }, time);
    });
});

