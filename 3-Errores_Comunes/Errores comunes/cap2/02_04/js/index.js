
const nombres = ["Sofía", "Ana", "María", "Patricia", "Lucía"];

// Todos los elementos que incluyan la letra a son eliminados:

let nombresFiltrados = nombres.filter(nombre => nombre.indexOf("a") === -1);

let reducidos = nombresFiltrados.reduce((lista, nombre) => lista + nombre.toUpperCase(), "");

console.log(reducidos);