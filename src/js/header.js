$(function() {
    function animateText() {
        const $wrapper = $('.bann__topAdd');
        const containerWidth = $('.header__bann').width();
        const wrapperWidth = $wrapper.width();

        // Establece la posición inicial del wrapper fuera del área visible
        $wrapper.css({ left: -wrapperWidth });

        const duration = 25000; // Duración de la animación

        // Función de animación
        function animate() {
            // Mueve el wrapper desde la izquierda (-width) hasta el final del contenedor
            $wrapper.animate({ left: containerWidth }, duration, 'linear', function() {
                // Una vez completada la animación, restablece inmediatamente la posición del wrapper
                $wrapper.css({ left: -wrapperWidth });
                // Reinicia la animación
                animate();
            });
        }

        // Inicia la animación
        animate();
    }

    // Manejo del evento del menú hamburguesa
    $('.burger').click(function() {
        $('.nav__boxMenu').toggle('fast');
        $(this).toggleClass('is-open');
    });

    // Inicia la animación del texto
    animateText();
});