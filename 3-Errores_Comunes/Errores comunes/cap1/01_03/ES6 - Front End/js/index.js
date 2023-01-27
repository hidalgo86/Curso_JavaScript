/**
 * Para importar un módulo ES6, se utiliza la la palabra import seguido de la lista de valores
 * que se quieren importar. Luego se utiliza la palabra from para indicar la ruta al módulo
 */
import {CLAVE_UNICA, Persona, generarIdUnico} from './moduloES6/modulo.js';

//Los export default no requieren importar el valor con el mismo nombre que fue declarado:
import limiteNumero from './moduloES6/modulo.js';

function comprobarIdentidad(clave){
    if(clave === CLAVE_UNICA){
        console.log("Clave es válida");
    }else{
        console.log("Clave no es válida");
    }
}

comprobarIdentidad("abc");

function incrementar(origen){
    for(origen; origen < limiteNumero; origen++){}
    console.log(origen);
}

incrementar(9);