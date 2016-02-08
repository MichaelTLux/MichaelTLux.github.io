var isMobile = function() {
    return (window.innerWidth <= 720);
};

var toggleHoverTextBySelector = function(selector) {
    $(selector).fadeIn(2000);
};

/** Once the DOM is ready. */
$( document ).ready(function(){
    $('.button-collapse').sideNav({
      closeOnClick: true 
    });

    if (!isMobile()) {
        $('.parallax').parallax();
    } 
});


/** Once everything, including images, is ready. */
$( window ).load(function() {
    $('.name-card').fadeIn(2000);
    var scrollfireManager = new ScrollFireManager();
    scrollfireManager.initScrollFire();
});


$(window).resize(function() {   
    if (window.lastWidth <= 720 && window.innerWidth > 720) {
        $('.parallax').parallax();
    }
    window.lastWidth = window.innerWidth;
});


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: (target.offset().top - 50)
            }, 1000);
            return false;
        }
    }
});