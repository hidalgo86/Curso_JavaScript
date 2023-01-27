let arr = ['elemento1', 'elemento2', 'elemento3'];

arr.nuevaPropiedad = 'prop';

console.log('%c for..in en un arreglo ', 'background: #222; color: #bada55');

// clave hace referencia a las claves en el objeto
for (let clave in arr) {
    console.log(clave);
}

console.log('%c for..of en un arreglo ', 'background: #222; color: #bada55');

// valor hace referencia a los valores en el objeto
for (let valor of arr) {
    console.log(valor)
}

console.log(arr[Symbol.iterator]);

///////////////////////////////

let cadena = "ABC";

console.log('%c for..in en un string ', 'background: #222; color: #bada55');

for (let letra in cadena) {
    console.log(letra)
}

console.log('%c for..of en un string ', 'background: #222; color: #bada55');

for (let letra of cadena) {
    console.log(letra)
}

console.log(cadena[Symbol.iterator]);

///////////////////////////////

let obj = {
    a: 'elemento1',
    b: 'elemento2',
    c: 'elemento3',
}

console.log('%c for..in en un objetos ', 'background: #222; color: #bada55');

for (let clave in obj) {
    console.log(clave);
}

console.log('%c for..of en un objeto ', 'background: #222; color: #bada55');
// el uso de for...of causará errores en un objeto porque no son iterables


//Implementación de método @@iterator
obj[Symbol.iterator] = function* () {
    yield "elemento1";
    yield "elemento2";
    yield "elemento3";
};




for (let valor of obj) {
    console.log(valor)
}
