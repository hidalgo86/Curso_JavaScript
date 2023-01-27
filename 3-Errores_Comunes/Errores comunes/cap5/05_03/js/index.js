/*
Proceso para resolver un error de lógica:
1. Entender que queremos lograr
2. Analizar lo que el código hizo
3. Crear varias hipótesis de la causa del error
4. Probar y eliminar hipótesis no verdaderas
*/

const conversion = (fahr) => {
    return (fahr - 32) * 5 / 9;
}

console.log(conversion(50));