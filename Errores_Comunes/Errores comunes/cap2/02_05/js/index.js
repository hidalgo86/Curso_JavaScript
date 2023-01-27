'use strict';

let obj = {};
obj.nombre = "Natalia";

let poema = "Vuelo supremo";

/**
 * Las primitivas son encapsuladas por un objeto para poder implementar métodos:
 */
poema = poema.toUpperCase();
console.log(poema);

/**
 * Pero este objeto no permite la asignación de propiedades:
 */

poema.autor = "Julián Marchena";
