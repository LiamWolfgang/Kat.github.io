$(function(){
    let datosServicio = JSON.parse(localStorage.getItem('datosServicio')) || {};

    localStorage.removeItem('datosServicio');

    $('#eventoForm-submit').click(function(event) {
        event.preventDefault();

        let lugar = $('#lugar').val();
        let fecha = $('#fecha').val();
        let hora = $('#hora').val();
        let comida = $('#comida').is(':checked') ? $('#comida').val() : null;
        let arreglo = $('#arreglo').is(':checked') ? 300 : 0;

        datosServicio.lugar = lugar;
        datosServicio.fecha = fecha;
        datosServicio.hora = hora;
        datosServicio.comida = comida;
        datosServicio.arreglo = arreglo;

        

        localStorage.setItem('datosServicio', JSON.stringify(datosServicio));
        window.location.href = 'menu.html';
        
    });
   

});
