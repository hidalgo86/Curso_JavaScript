
/**
 * Cómo se crean e inyectan usualmente objetos al DOM:
 */
document.body.appendChild(document.createElement("div"));

/**
 * Este es un método más eficiente:
 */

let fragmento = document.createDocumentFragment();

let mensaje = "Hola JS :)";

for(let i = 0; i <= 1000; i++){
    fragmento.appendChild(document.createTextNode(mensaje));
    fragmento.appendChild(document.createElement("br"));
}

document.body.appendChild(fragmento);

console.log(fragmento.hasChildNodes());
