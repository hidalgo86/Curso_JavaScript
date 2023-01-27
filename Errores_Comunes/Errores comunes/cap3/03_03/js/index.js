/**
 * La asignación no está permitoda en ciertos objetos:
 */

this = null;

//////////////

function generarColor() {
    return Math.floor(Math.random() * 16777215).toString(16);;
}

/**
 * Es común crear una asignación por error:
 */

if (generarColor() = "ffffff") {
    console.log("El color es blanco");
}
