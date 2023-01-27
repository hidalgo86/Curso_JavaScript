//Variables globales

function mensaje() {
    msj = "una variable global";
}

mensaje();

//Referencias a objetos
let boton = document.getElementsByTagName("button")[0];

//Listeners sin remover
boton.addEventListener("click", clickHandler);

function clickHandler(){
    console.log("Alguna acción");
}

function removerBoton(){
    boton.removeEventListener("click", clickHandler);
    document.body.removeChild(boton);
    boton = null;
}

//removerBoton();
