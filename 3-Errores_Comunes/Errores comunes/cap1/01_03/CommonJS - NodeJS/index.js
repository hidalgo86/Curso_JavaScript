/**
 * Se utiliza la función require para importar el módulo CommonJS
 * Podemos utilizar la destructuración de objetos para obtener los valores dentro
 * del objeto "exports"
 */
const {CLAVE_UNICA, generarIdUnico, Persona, TOTAL} = require('./modulo');

let persona = new Persona();
persona.llamarFunctionPrivada();

console.log(CLAVE_UNICA);