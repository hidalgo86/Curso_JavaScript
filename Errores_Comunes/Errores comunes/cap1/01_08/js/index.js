/**
 * El motor de JavaScript inyecta automaticamente el punto y coma
 * en caso de que no esté presente
 */
const buenos = 'buenos'

const dias = 'días'

/**
 * En ciertas situaciones esta inyección no sucede y puede causar problemas:
 */

const saludo = buenos + ' ' + dias

['a', 'b', 'c'].forEach((letra) => console.log(letra))

/**
 * En otros escenarios la inyección es automática, como en el caso del keyword return:
 */

function retornaFecha(){
    return
    {
        fecha: "01/01/2021"
    }
}

console.log(retornaFecha());
