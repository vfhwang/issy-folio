$(window).load(function() {

    if($(window).width() >= 600){
        console.log('HI HI HI');
        $('.flexslider').flexslider({
            controlNav: false,
            directionNav: true,
            touch: true,
            animation: "slide",
            controlsContainer: $(".custom-controls-container"),
            customDirectionNav: $(".custom-navigation a"),
            slideshow: false,
            });
      }else{
        var el = document.getElementById('delete-on-mob');
        el.remove(); // Removes the div with the 'div-02' id
      };

});



// $(window).resize(function() {
//     if( $(this).width() > 600 ) {
//         console.log('HI HI HI');
//         // $('.flexslider').flexslider({
//         //     controlNav: false,
//         //     directionNav: true,
//         //     touch: true,
//         //     animation: "slide",
//         //     controlsContainer: $(".custom-controls-container"),
//         //     customDirectionNav: $(".custom-navigation a"),
//         //     slideshow: false,
//         //     });
//     }
// });