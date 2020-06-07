$(window).load(function() {
    $('.flexslider').flexslider({
    controlNav: false,
    directionNav: true,
    touch: true,
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
    });
});