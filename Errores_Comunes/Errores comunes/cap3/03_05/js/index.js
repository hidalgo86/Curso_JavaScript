
/**
 * Los parámetros de una función tienen su propio scope
 */

let valor = 50;

function miFuncion(valor = valor + 1) {
    return valor2;
}

console.log("Valor retornado por 'miFuncion': ", miFuncion()); 