'strict mode'

console.log(this);

var a = "una variable";

function quienSoy() {
    console.log(this.a);
    console.log(this);
}

quienSoy();

function otraFuncion() {
    console.log('Llamado de otraFuncion');
    quienSoy();
}

otraFuncion();

let obj = {
    a: "otra variable",
    contador: 10,
    func: function () {
        console.log("Yo soy ", this);
    },
    func2: function () {
        setTimeout(()=>{
            if (this.contador) {
                this.contador = 20;
            }
            console.log(this.contador);
        }, 0);
    }
};

obj.func();
obj.func2();

/*
    El método call llama a la función utilizando como contexto
    de ejecución el objeto que se pasa como parámetro
*/

quienSoy.call(obj);

let btn = document.getElementById("btn")
    .addEventListener("click", ()=>{
        console.log(this.a);
    });
