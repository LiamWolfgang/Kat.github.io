$(document).ready(function() {
    let vh = $(window).innerHeight() * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    $('.header__nav').css({
        'position': 'sticky',
        'top': '0',
        'z-index': '1000'
    });
});