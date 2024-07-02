let datosServicio = JSON.parse(localStorage.getItem('datosServicio')) || {};
let productos = JSON.parse(localStorage.getItem('productos')) || [];

// Función para cotizar
function cotizar() {
    
    let servicio = document.querySelector('#cesta-servicio');
    let lugar = document.querySelector('#cesta-lugar');
    let fecha = document.querySelector('#cesta-fecha');
    let hora = document.querySelector('#cesta-hora');
    let arreglo = document.querySelector('#cesta-arreglo');

    // Verifica si datosServicio tiene las propiedades necesarias
    if (datosServicio && typeof datosServicio === 'object') {
        servicio.textContent = datosServicio.evento || 'N/A';
        lugar.textContent = datosServicio.lugar || 'N/A';
        fecha.textContent = datosServicio.fecha || 'N/A';
        hora.textContent = datosServicio.hora || 'N/A';
        arreglo.textContent = datosServicio.arreglo !== undefined ? `€${datosServicio.arreglo}` : 'N/A';
    } else {
        console.error('No se encontraron datos de servicio o el formato es incorrecto.');
    }

    let btnTotal = document.querySelector('.suma-total');
    let Total = 0;

    // Verifica si productos es un array
    if (Array.isArray(productos)) {
        productos.forEach(i => {
            Total += Number(i);
        });
    } else {
        console.error('Productos no es un array o está vacío.');
    }

    Total = (parseInt(datosServicio.arreglo)+Total).toFixed(2); 
    btnTotal.textContent = `Total: €${Total}`; 
}


cotizar();
