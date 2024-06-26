$(function() {
    $('.card__panel').click(function() {
        var $text = $(this).find('.card__text');
        var $parrafo = $(this).find('.card-parrafo');
        var $arrow = $(this).find('.encabezado-arrow');

        if ($text.is(':visible')) {
            $(this).css('height', '3rem');
            $text.animate({opacity: 0}, 300, function() {
                $(this).css('display', 'none');
            });
            $parrafo.hide();
            $arrow.css('transform', 'rotate(0deg)');
        } else {
            $(this).css('height', '100%');
            $text.css({
                'display': 'flex',
                'opacity': 0
            }).animate({opacity: 1}, 300);
            $parrafo.show();
            $arrow.css('transform', 'rotate(180deg)');
        }
    });
});