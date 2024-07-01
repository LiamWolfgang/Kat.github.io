document.addEventListener('DOMContentLoaded', () => {
   


    let productos = [];



    function carrito(sub) {
        
        if(productos){
            productos.push(sub);
            console.log(productos);
            localStorage.setItem('productos', JSON.stringify(productos));
        }

        return productos
    }


    function asignarEventosCarrito() {
        let btnAgregar = document.querySelectorAll('.añadir-btn'); 
        btnAgregar.forEach(btn => {
            btn.addEventListener('click', function() {
                let precioElemento = this.closest('.card__añadir').querySelector('.precioCard');
                let cantidad = parseInt(this.closest('.card__añadir').querySelector('.contador-input').value, 10);
                let precioUnitario = parseFloat(precioElemento.getAttribute('data-precio-unitario'));
                let subtotal = cantidad * precioUnitario;
    

                carrito(subtotal); 
            });
        });
    };

    asignarEventosCarrito();
    
});