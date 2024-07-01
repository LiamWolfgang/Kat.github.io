document.addEventListener('DOMContentLoaded', () => {
    agregarCarrito();
    generarTarjetasCarrito();
    actualizarDatosServicio();
    calcularYMostrarTotal();
});

function actualizarDatosServicio() {
    const datosServicio = JSON.parse(localStorage.getItem('datosServicio'));
    if (datosServicio) {
        const elementos = {
            'cesta-servicio': datosServicio.servicio || '',
            'cesta-lugar': datosServicio.lugar || '',
            'cesta-fecha': datosServicio.fecha || '',
            'cesta-hora': datosServicio.hora || '',
            'cesta-arreglo': `$${datosServicio.arreglo || 0}`,
        };
        Object.entries(elementos).forEach(([id, valor]) => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.textContent = valor;
        });
    }
}

function calcularYMostrarTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const datosServicio = JSON.parse(localStorage.getItem('datosServicio')) || {};
    let total = carrito.reduce((acc, articulo) => acc + articulo.subTotal, 0);
    total += parseFloat(datosServicio.arreglo || 0);
    const sumaTotal = document.querySelector('.suma-total');
    if (sumaTotal) sumaTotal.textContent = `$${total.toFixed(2)}`;
}

function agregarCarrito() {
    let btnAgregar = document.getElementsByClassName('añadir-btn');

    Array.from(btnAgregar).forEach(btn => {
        btn.addEventListener('click', function() {
            const cardAñadir = btn.closest('.card__añadir');
            if (!cardAñadir) {
                console.error('Cannot find .card__añadir for the clicked button');
                return;
            }

            let inputElemento = cardAñadir.getElementsByClassName('contador-input')[0];
            let precioElemento = cardAñadir.getElementsByClassName('precioCard')[0];
            let nombreProducto = btn.closest('.padre').getElementsByClassName('encabezado-titulo')[0].textContent;
            let descripcionProducto = btn.closest('.padre').getElementsByClassName('text-parrafo')[0].textContent;
            let image = btn.closest('.padre').querySelector('.card-image img').src;

            let articulo = {
                imagen: image,
                nombre: nombreProducto,
                descripcion: descripcionProducto,
                cantidad: parseInt(inputElemento.value),
                subTotal: parseFloat(precioElemento.getAttribute('data-precio-unitario')) * parseInt(inputElemento.value),
            };

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(articulo);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Artículo añadido al carrito');
        });
    });
}

function generarTarjetasCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedor = document.querySelector('.cesta__detalles');

    carrito.forEach(articulo => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('detalles__container');
        tarjeta.innerHTML = `
            <div class="container-img"><img src="${articulo.imagen}" alt=""></div>
            <div class="container__boxListado">
                <div class="boxListado__listado--1">
                    <h3 class="listado-producto">Producto: </h3>
                    <h3 class="producto-nombre">${articulo.nombre}</h3>
                </div>
                <div class="boxListado__listado--2">
                    <p class="listado-cantidad">Cantidad: </p>
                    <h3 class="producto-cantidad">${articulo.cantidad}</h3>
                </div>
                <div class="boxListado__listado--3">
                    <p class="listado-subTotal">Sub-Total: </p>
                    <h3 class="producto-subTotal">$ ${articulo.subTotal.toFixed(2)}</h3>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}
