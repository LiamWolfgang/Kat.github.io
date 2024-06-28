// object.js
import Producto from './class/producto.js';



// Crear instancias de productos en un arreglo
let P001 = new Producto("P001", "Ensalada de Quinua con Verduras Asadas", "Quinua, pimientos, calabacín, berenjena, cebolla roja, tomates cherry, aceite de oliva, jugo de limón, sal, y pimienta.", "Quinua mezclada con una variedad de verduras asadas y aderezada con aceite de oliva y jugo de limón.", 12.50);
let P002 = new Producto("P002", "Tacos de Coliflor", "Coliflor, tortillas de maíz, aguacate, cebolla morada, cilantro, jugo de limón, salsa picante.", "Tacos hechos con coliflor sazonada, servidos con aguacate y una salsa fresca de cebolla y cilantro.", 10.00);
let P003 = new Producto("P003", "Falafel con Salsa Tahini", "Garbanzos, perejil, cilantro, ajo, comino, harina de garbanzo, aceite de oliva, tahini, jugo de limón.", "Bolitas de falafel crujientes servidas con una salsa tahini cremosa.", 9.00);
let P004 = new Producto("P004", "Pasta Primavera", "Pasta (puede ser de trigo, integral o sin gluten), pimientos, brócoli, guisantes, tomates cherry, albahaca, aceite de oliva, ajo.", "Pasta acompañada de una variedad de verduras salteadas con ajo y aceite de oliva.", 14.00);
let P005 = new Producto("P005", "Curry de Garbanzos y Espinacas", "Garbanzos, espinacas, leche de coco, pasta de curry, cebolla, ajo, jengibre, tomate, cilantro.", "Un curry cremoso de garbanzos y espinacas con especias y leche de coco, servido con arroz o pan naan.", 13.50);

console.log(P001);