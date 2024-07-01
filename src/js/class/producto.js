// producto.js
class Producto {
    constructor(id, nombre , ingredientes , descripcion , precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
    }

}
export {Producto};