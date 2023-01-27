/**
 * Módulo en formato CommonJS:
 * Estos módulos se utilizan en NodeJS. 
 * Se utiliza el objeto "exports" para indicar que valores se quieren exportar
 */

function funcionPrivada(){
    console.log("Esta función solo puede accederse dentro del módulo");
}

exports.CLAVE_UNICA = "PiunVsEb3iZVkblVWd0UnyirF89psOJh";

exports.generarIdUnico = ()=>{/****/}

class Persona {
    llamarFunctionPrivada(){
        funcionPrivada();
    }
}
exports.Persona = Persona;

exports.TOTAL = 50;