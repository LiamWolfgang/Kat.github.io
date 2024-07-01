


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
    
    $('.box-btn').click(function(){
        window.location.href = 'carrito.html';
    });

    // carrito.html
    $('.pago-btn').click(function(){
        window.location.href = 'envio.html';
    });



    // evento.html
    $('#envioForm-submit').click(function(){
        localStorage.clear();
        window.location.href = 'index.html';
        alert('Datos enviados correctamente, en breve nos pondremos en contacto contigo.');
        
    });
    









});