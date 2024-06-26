$(function(){
    let datosServicio = JSON.parse(localStorage.getItem('datosServicio'));
    localStorage.removeItem('datosServicio');
    $('#eventoForm').submit(function(event) {
        event.preventDefault();

        let lugar = $('#lugar').val();
        let fecha = $('#lugar').val();
        let hora = $('#lugar').val();
        let comida = $('#comida').val();
        let arreglo = $('#arreglo').val();

        if(arreglo===undefined){
            arreglo = 0;
        }else{
            arreglo = 300;
        };

        datosServicio.lugar = lugar;
        datosServicio.fecha = fecha;
        datosServicio.hora = hora;
        datosServicio.comida = comida;
        datosServicio.arreglo = arreglo;

        localStorage.setItem('datosServicio',JSON.stringify('datosServicio'));

    });
});



