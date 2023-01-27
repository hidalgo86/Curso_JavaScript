function incrementar(x) {

    console.log("Valor actual ", x);

    // Estructura de salida
    if (x >= 100)
        return;


    incrementar(x + 1); // Llamada recursiva
}

incrementar(0);
