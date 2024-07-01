


$(function() {
    // eliminar datosServicio si se encuentra en la pagina de servicios
    if (window.location.pathname.endsWith('servicios.html')) {
        localStorage.removeItem('datosServicio');
    };

    // idex.html
    // Animacion del texto de la seccion 1
    $('.section-1').addClass('fadeIn');
    $('.section-1 .section-1__text-h2').addClass('slideInFromLeft');
    $('.section-1 .section-1__text-p').addClass('slideInFromRight');

    $('.section-1').addClass('fadeIn');
    $('.section-1 .section-1__text-h2').addClass('slideInFromLeft');
    $('.section-1 .section-1__text-p').addClass('slideInFromRight');

    // Agrega las mismas animaciones al texto de la sección 2
    $('.section-2').addClass('fadeIn');
    $('.section-2 .section-2__text-h2').addClass('slideInFromLeft');
    $('.section-2 .section-2__text-p').addClass('slideInFromRight');



    

        let datosServicio = {};
    
        $('#encabezado__btn1').click(function() {
            datosServicio.evento = 'Boda';
            localStorage.setItem('datosServicio', JSON.stringify(datosServicio));
            console.log('Datos guardados:', datosServicio); // Mensaje de depuración
            window.location.href = 'evento.html';
        });
    
        $('#encabezado__btn2').click(function() {
            datosServicio.evento = 'Cumpleaños';
            localStorage.setItem('datosServicio', JSON.stringify(datosServicio));
            console.log('Datos guardados:', datosServicio); // Mensaje de depuración
            window.location.href = 'evento.html';
        });
    
        $('#encabezado__btn3').click(function() {
            datosServicio.evento = 'Corporativo';
            localStorage.setItem('datosServicio', JSON.stringify(datosServicio));
            console.log('Datos guardados:', datosServicio); // Mensaje de depuración
            window.location.href = 'evento.html';
        });
    

    // evento

    


    // Menu.html
    
    
    





















    $('.contador-incrementar').click(function() {
    let input = $('.contador-input');
    let currentValue = parseInt(input.val(), 10);
    if (isNaN(currentValue)) {
        currentValue = 1; 
    }
    input.val(currentValue + 1);
    });

    $('.contador-decrementar').click(function() {
    let input = $('.contador-input');
    let currentValue = parseInt(input.val(), 10);
    if (isNaN(currentValue)) {
        currentValue = 1;
    }
    if (currentValue > 1) { 
        input.val(currentValue - 1);
    }
    });


});