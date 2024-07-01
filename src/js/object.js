// object.js
import {Producto} from './class/producto.js';


let P001 = new Producto("P001", "Ensalada de Quinua con Verduras Asadas", "Quinua, pimientos, calabacín, berenjena, cebolla roja, tomates cherry, aceite de oliva, jugo de limón, sal, y pimienta.", "Quinua mezclada con una variedad de verduras asadas y aderezada con aceite de oliva y jugo de limón.", 12.50, "src/img/menu/platillos/P001.webp");
let P002 = new Producto("P002", "Tacos de Coliflor", "Coliflor, tortillas de maíz, aguacate, cebolla morada, cilantro, jugo de limón, salsa picante.", "Tacos hechos con coliflor sazonada, servidos con aguacate y una salsa fresca de cebolla y cilantro.", 10.00, "src/img/menu/platillos/P002.webp");
let P003 = new Producto("P003", "Falafel con Salsa Tahini", "Garbanzos, perejil, cilantro, ajo, comino, harina de garbanzo, aceite de oliva, tahini, jugo de limón.", "Bolitas de falafel crujientes servidas con una salsa tahini cremosa.", 9.00, "src/img/menu/platillos/P003.webp");
let P004 = new Producto("P004", "Pasta Primavera", "Pasta (puede ser de trigo, integral o sin gluten), pimientos, brócoli, guisantes, tomates cherry, albahaca, aceite de oliva, ajo.", "Pasta acompañada de una variedad de verduras salteadas con ajo y aceite de oliva.", 14.00, "src/img/menu/platillos/P004.webp");
let P005 = new Producto("P005", "Curry de Garbanzos y Espinacas", "Garbanzos, espinacas, leche de coco, pasta de curry, cebolla, ajo, jengibre, tomate, cilantro.", "Un curry cremoso de garbanzos y espinacas con especias y leche de coco, servido con arroz o pan naan.", 13.50, "src/img/menu/platillos/P005.webp");

let PV001 = new Producto("PV001", "Gilda", "Aceitunas verdes, anchoas, guindillas en vinagre.", "Un clásico pincho vasco con aceitunas, anchoas y guindillas ensartadas en un palillo.", 2.50, "src/img/menu/pintxos/PV001.webp");
let PV002 = new Producto("PV002", "Tortilla de Patatas", "Patatas, cebolla, huevos, aceite de oliva, sal.", "Tradicional tortilla española cortada en pequeños cubos y servida en un pincho.", 3.00, "src/img/menu/pintxos/PV002.webp");
let PV003 = new Producto("PV003", "Pintxo de Piquillos Rellenos", "Pimientos del piquillo, queso de cabra, nueces, miel.", "Pimientos del piquillo rellenos de una mezcla de queso de cabra y nueces, con un toque de miel.", 3.50, "src/img/menu/pintxos/PV003.webp");
let PV004 = new Producto("PV004", "Bacalao al Pil-Pil", "Bacalao desalado, ajo, aceite de oliva, guindilla.", "Bacalao cocinado en aceite de oliva con ajo y guindilla, servido en pequeñas porciones.", 4.00, "src/img/menu/pintxos/PV004.webp");
let PV005 = new Producto("PV005", "Pintxo de Setas con Jamón", "Setas, jamón serrano, ajo, aceite de oliva, perejil.", "Setas salteadas con ajo y perejil, acompañadas de jamón serrano.", 3.50, "src/img/menu/pintxos/PV005.webp");

let PO001 = new Producto("PO001", "Tarta de Chocolate Vegana", "Chocolate negro, leche de almendras, harina, azúcar de coco, aceite de coco.", "Tarta rica y húmeda hecha con ingredientes veganos.", 7.00, "src/img/menu/postres/PO001.webp");
let PO002 = new Producto("PO002", "Cheesecake de Frutos Rojos", "Queso crema, azúcar, galletas digestivas, mantequilla, frutos rojos, gelatina.", "Suave cheesecake con una base de galletas y cubierta de frutos rojos.", 9.00, "src/img/menu/postres/PO002.webp");
let PO003 = new Producto("PO003", "Crema Catalana", "Leche, nata, yemas de huevo, azúcar, canela, piel de limón.", "Postre tradicional catalán similar a la crème brûlée con una capa de caramelo crujiente.", 4.00, "src/img/menu/postres/PO003.webp");
let PO004 = new Producto("PO004", "Tiramisú", "Queso mascarpone, café, bizcochos de soletilla, cacao en polvo, azúcar, licor.", "Postre italiano en capas con bizcochos empapados en café y una mezcla cremosa de mascarpone.", 6.50, "src/img/menu/postres/PO004.webp");
let PO005 = new Producto("PO005", "Sorbete de Mango", "Mangos, azúcar, jugo de limón.", "Refrescante sorbete de mango natural.", 5.00, "src/img/menu/postres/PO005.webp");

let B001 = new Producto("B001", "Sangría", "Vino tinto, brandy, frutas frescas (naranjas, limones, manzanas), azúcar, refresco de limón o soda.", "Bebida tradicional española con vino tinto y frutas.", 6.00, "src/img/menu/bebidas/B001.webp");
let B002 = new Producto("B002", "Agua de Valencia", "Cava o champaña, jugo de naranja, ginebra, vodka, azúcar.", "Cóctel a base de cava y jugo de naranja con un toque de licor.", 8.00, "src/img/menu/bebidas/B002.webp");
let B003 = new Producto("B003", "Tinto de Verano", "Vino tinto, gaseosa de limón.", "Refrescante mezcla de vino tinto y gaseosa de limón, similar a la sangría pero más simple.", 4.50, "src/img/menu/bebidas/B003.webp");
let B004 = new Producto("B004", "Rebujito", "Fino (vino de Jerez), gaseosa de lima-limón, hielo, hierbabuena.", "Bebida refrescante con fino y gaseosa de lima-limón.", 5.50, "src/img/menu/bebidas/B004.webp");
let B005 = new Producto("B005", "Mojito", "Ron blanco, azúcar, lima, menta, agua con gas.", "Cóctel cubano con ron, menta, y un toque de lima.", 7.00, "src/img/menu/bebidas/B005.webp");



const articulos = [P001, P002, P003, P004, P005, PV001, PV002, PV003, PV004, PV005, PO001, PO002, PO003, PO004, PO005, B001, B002, B003, B004, B005];

export {articulos};
// // Corrección para asignar valores a elementos de texto
// let titulo = document.getElementById('titulo-N001');
// let ingredientes = document.getElementById('ingrediente-N001');
// let descripcion = document.getElementById('descripcion-N001');
// let precio = document.getElementById('precio-N001');
// let img = document.querySelector('.card-image>img'); // Asegúrate de que este selector sea correcto

// // Asegurándose de que los elementos existen antes de intentar asignarles valores
// if (titulo) titulo.textContent = P001.nombre;
// if (ingredientes) ingredientes.textContent = P001.ingredientes;
// if (descripcion) descripcion.textContent = P001.descripcion;
// if (precio) precio.textContent = P001.precio.toString(); // Convertir a string si es necesario
// if (img) img.src = P001.img; // Usar .src para cambiar la fuente de la imagen




