/**
 * 1. Los errores de syntaxis harán que el código no corra:
 */

lets num = 1;

/**
 *2. Los errores en ejecución harán que la ejecución de la aplicación se detenga:
 */

function errorSinDeteccion() {
    let arr = [];
    arr.length = -1;
    console.log("Esta línea no se ejecutará");
}

function llamaFuncion(){
    errorSinDeteccion();
}

llamaFuncion();

/**
 * 3. Si un error ocurre dentro de una promesa, 
 * la ejecución se detendrá solamente cuando no incluyamos una función para 
 * capturar el rechazo de la promesa
 */

let prom = new Promise((resolve)=>{
    let arr = [];
    arr.length = -1;
    resolve(true);
});

prom.then(val=>{
    console.log("El valor que he recibido de la promesa: " + val);
}, ()=>{
    console.log("Un error ha sucedido dentro de la promesa");
});

console.log("Esta línea se ejecutará solo si se logra detectar el error en la promesa");