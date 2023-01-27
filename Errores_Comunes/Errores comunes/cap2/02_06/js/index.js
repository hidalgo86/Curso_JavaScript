class Persona {
    constructor(info) {
        this._info = info;
    }

    decirNombre() {
        if (this._info.nombre) {
            return () => {
                console.log(`Mi nombre es ${this._info.nombre}`);
            }
        }
    }

    decirDireccion() {
        if (this._info.direccion) {
            return () => {
                console.log(`Mi dirección es ${this._info.direccion}`);
            }
        }
    }
}

function Perro(){}
Perro.prototype.ladra = function(){
    return "guau guau guau!"
}

let persona = new Persona({});
let mascota = new Perro();
let nombre = "Eleanor";

// instanceof

console.log(mascota instanceof Perro);

console.log(persona instanceof Persona);

//console.log(nombre instanceof "");

// typeof

console.log(typeof nombre);

console.log(typeof persona);

console.log(typeof mascota);

console.log(typeof Perro);

console.log(typeof Persona);
