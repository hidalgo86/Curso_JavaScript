/**
 * Módulo con formato ES6:
 * Estos módulos se utilizan en front-end
 * Se utiliza la palabra clave "export" para exportar valores fuera del módulo
 */

function funcionPrivada(){
    console.log("Esta función solo puede accederse dentro del módulo");
}

export const CLAVE_UNICA = "PiunVsEb3iZVkblVWd0UnyirF89psOJh";

export function generarIdUnico() {/****/}

export class Persona {
    llamarFunctionPrivada(){
        funcionPrivada();
    }
}

const TOTAL = 50;

//Solamente puede haber un export default por módulo
export default TOTAL;
