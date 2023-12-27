var prevScrollPos = window.scrollY;

$(window).scroll(function () {
    var currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        $(".header").css("top", "0");
    } else {
        $(".header").css("top", "-84px");
    }

    prevScrollPos = currentScrollPos;
});