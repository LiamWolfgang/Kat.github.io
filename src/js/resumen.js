


let productos = JSON.parse(localStorage.getItem('productos')) || [];

    

    let sumaTotal = 0; // Inicialización de sumaTotal

    // Verificar si carritoFinal tiene la propiedad productos y si es un array
    
        productos.forEach(i => {
            sumaTotal += i; 
        });
    

   
    document.querySelector('.suma-total').textContent = `$ ${sumaTotal}`;