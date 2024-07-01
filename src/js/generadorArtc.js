import { articulos } from './object.js';

function generadorArticulos(artc, cont) {
    if (!artc || !artc.img) {
        console.error("No hay artículos disponibles para generar.");
        return;
    }
    const container__card = document.createElement('div');
    let sectionCard = `section${cont}__card`;
    container__card.classList.add(sectionCard);

    container__card.innerHTML = `
            <div class="card-image"><img src="${artc.img}" alt="Image 1" /></div>
            <div class="card__detalles">
                <div class="detalles__encabezado">
                    <h2 class="encabezado-titulo" id="titulo-${artc.id}">${artc.nombre}</h2>
                </div>
                <div class="detalles__text">
                    <p class="text-parrafo" id="ingrediente-${artc.id}">Ingredientes: ${artc.ingredientes}
                    <br /><br /><span class="descripcion" id="descripcion-${artc.id}">Descripción: ${artc.descripcion}</span>
                    </p>
                </div>
            </div>
            <div class="card__añadir">
                <div class="añadir__contador">
                    <span class="contador-decrementar">-</span>
                    <input class="contador-input" id="cantidad-${artc.id}" value="1" type="number" />
                    <span class="contador-incrementar">+</span>
                </div>

                <p class="añadir-precio">
                    € <span class="precioCard" id="precio-${artc.id}" data-precio-unitario="${artc.precio}">${artc.precio}</span>
                </p>

                <button class="añadir-btn" id="añadir-${artc.id}">Añadir al carrito</button>
            </div>
    `;

    let section = document.querySelector(`.section${cont} .listaMenu`);
    try {
        if (section) {
            section.appendChild(container__card);
        }
    } catch (error) {
        console.log("No hay secciones disponibles para generar el artículo: ", error);
    }
}





let cont = 0;
// llamada al generador de artículos
for (let i = 0; i < articulos.length; i++) {
    if (i % 5 === 0) cont++;
    generadorArticulos(articulos[i], cont);
}

function actualizarPrecio(precioElemento) {
    let container = precioElemento.closest('.card__añadir');
    let inputElemento = container.querySelector('.contador-input');
    

    const precioUnitario = parseFloat(precioElemento.getAttribute('data-precio-unitario'));
    let cantidad = parseInt(inputElemento.value, 10);

    if (isNaN(precioUnitario) || isNaN(cantidad)) {
        console.error("No se puede calcular el precio.");
        return 0;
    }
    let precioNuevo = cantidad * precioUnitario;

    
    precioElemento.textContent = precioNuevo.toFixed(2);

    return precioNuevo;
}

function decremento() {
    let btnDecremento = document.getElementsByClassName('contador-decrementar');

    // escucha de evento click
    Array.from(btnDecremento).forEach(btn => {
        btn.addEventListener('click', function() {
            let input = this.closest('.añadir__contador').getElementsByClassName('contador-input')[0];
            let precioElemento = this.closest('.card__añadir').getElementsByClassName('precioCard')[0];

            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                actualizarPrecio(precioElemento);
            }
        });
    });
}

function incremento() {
    let btnIncremento = document.getElementsByClassName('contador-incrementar');

    // escucha de evento click
    Array.from(btnIncremento).forEach(btn => {
        btn.addEventListener('click', function() {
            let input = this.closest('.añadir__contador').getElementsByClassName('contador-input')[0];
            let precioElemento = this.closest('.card__añadir').getElementsByClassName('precioCard')[0];

            if (parseInt(input.value) >= 1) {
                input.value = parseInt(input.value) + 1;
                actualizarPrecio(precioElemento);
            }
        });
    });
}





document.addEventListener('DOMContentLoaded', () => {
    incremento();
    decremento();
    
});
