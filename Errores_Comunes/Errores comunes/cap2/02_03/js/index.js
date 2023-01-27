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

const personas =
    [
        { nombre: "Natalia", apellido: "Corea", direccion: "34 Hogan rd" },
        { nombre: "María", apellido: "Alpízar", telefono: "0875643234" },
        { nombre: "Camilo", apellido: "Piedra", telefono: "8874598", direccion: "Los Santos, Heredia" }
    ];

    const personasObjetos = [];

    personas.forEach(persona=>{
        personasObjetos.push(new Persona(persona));
    });

    let direccion0 = personasObjetos[0].decirDireccion();
    let direccion1 = personasObjetos[1].decirDireccion();
    let direccion2 = personasObjetos[2].decirDireccion();

    direccion0();
    direccion1();





