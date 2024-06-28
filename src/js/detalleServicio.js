$(function(){
    let datosServicio = JSON.parse(localStorage.getItem('datosServicio'));
    localStorage.removeItem('datosServicio');

    $('#eventoForm-submit').click(function(event) {
        event.preventDefault();

        let lugar = $('#lugar').val();
        let fecha = $('#fecha').val();
        let hora = $('#hora').val();
        let comida = $('#comida').val();
        let arreglo = $('#arreglo').val();

        if (arreglo === '') {
            arreglo = 0;
        } else {
            arreglo = 300;
        }

        datosServicio = {
            lugar: lugar,
            fecha: fecha,
            hora: hora,
            comida: comida,
            arreglo: arreglo
        };

        localStorage.setItem('datosServicio', JSON.stringify(datosServicio));
        
    });
   

});
