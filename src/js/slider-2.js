$(function(){
    $('.slider-slide').hover(
        function() { 
            $(this).addClass('expand');
            $(this).siblings().addClass('shrink');
        },
        function() { 
            $(this).removeClass('expand');
            $(this).siblings().removeClass('shrink');
        }
    );
});