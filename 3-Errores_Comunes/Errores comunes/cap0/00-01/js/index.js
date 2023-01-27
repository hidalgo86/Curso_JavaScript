/*
1. Tipos de errores que existen
    a. Errores de sintaxis: SyntaxError
    b. Errores de tipo: TypeError
    c. Errores de referencia: ReferenceError
    d. Errores de rango: RangeError
    e. URIError
*/

/**
 * Estas funciones ejemplifican como los mensajes de error se muestran en la consola
 */

function errorSinDeteccion() {
    let arr = [];
    arr.length = -1;
}

function llamaFuncion(){
    errorSinDeteccion();
}

llamaFuncion();



/**
 * Esta función captura el error utilizando la estructura try{...}catch(){...}
 * y muestra el mensaje de error en la consola
 */
function errorConDeteccion() {
    try {
        let obj = {};
        obj.split();
    } catch (error) {
        console.log(error);
    }
}

errorConDeteccion();
