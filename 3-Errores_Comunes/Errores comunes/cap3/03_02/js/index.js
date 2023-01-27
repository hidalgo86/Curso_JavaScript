
const a = "una variable";

function imprimirVariable() {
    console.log(this.a);
}

console.log('%c Primera llamada:', 'background: #222; color: #bada55');

imprimirVariable();

function otraFuncion() {
    const a = "otra variable";
    imprimirVariable();
    console.log("El valor de a dentro de 'otraFuncion' es ", a);
}

console.log("%c Segunda llamada dentro de 'otraFuncion':", 'background: #222; color: #bada55');

otraFuncion();

let obj = {
    a: "otra variable",
    contador: 10
};

console.log("%c Tercera llamada cambiando el valor de 'this':", 'background: #222; color: #bada55');

imprimirVariable.call(obj);


