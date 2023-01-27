/**
 * Es común cometer errores de sintaxis al accidentalmente omitir uno o más caracteres
 * mientras escribimos código
 */

let numA = 5;
let numB = 10;

function compararNumeros(a, b) {
    if (a > b) || (b > a){ // La estructura de la condición esta incorrecta

    }
}

/**
 * Los mensajes de error en la consola nos dan una pista de la ubicación del error
 * pero la localización suele no ser exacta. Hay que observar bien para encontrar el error:
 */

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (var i = 0, j = arreglo.length; i < j, i++) { //Falta un punto y comma
    total += arreglo[i];
}

/**
 * Cuando hay muchos bloques de código dentro uno del otro se corre el riesgo de confundir los
 * paréntesis que cierran cada bloque. Para evitar esto es mejor dividir el código en funciones:
 */

function ejecutarOperacion(a, b) {
    return new Promise((resolve, reject) => {
        if ((a > b) || (b > a)) {
            let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let total = 0;
            for (var i = 0, j = arreglo.length; i < j; i++) {
                total += arreglo[i];
            }
    }); //Aquí falta un paréntesis
}
