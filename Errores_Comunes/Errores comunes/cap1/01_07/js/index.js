
"use strict";

var sabores = { a: "Fresa", b: "Frambuesa", c: "Chocolate" };

/**
 * No debemos agregar un valor inicial a la variable en un bucle for...in
 */
for (var sabor = "Vainilla" in sabores) {
    console.log(sabores[sabor]);
}

/**
 * Los bucles for...in no son recomendados para recorrer arreglos:
 */
var numeros = [];
numeros[3] = 20;

for (var num in numeros) {
    console.log("num: ", num);
}

for(let i = 0, j = numeros.length; i < j; i++){
    console.log("num: ", numeros[i]);
}
