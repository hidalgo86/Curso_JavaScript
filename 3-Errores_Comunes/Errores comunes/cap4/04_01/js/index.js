

window.addEventListener("unhandledrejection", evento => {
    console.log("%c Detección global de un error no capturado:", "color: #D81159");
    console.log(evento.promise, evento.reason);
});

function promesaConError() {
    return new Promise((resolve, reject) => {
        throw new Error("Oh no!");
    });
}

function promesaRechazada() {
    return new Promise((resolve, reject) => {
        reject("Valor rechazado");
    });
}

async function ejecutarPromesas() {
    try {
        await promesaRechazada();
       // await promesaConError();
    }catch(error){
        console.log("%c Un error ha sucedido: ", "color: #D81159", error)
    }
    
}

//ejecutarPromesas();

/////


window.addEventListener('rejectionhandled', evento => {
    console.log("%c Promesa rechazada con eventual manejo:", "color: #D81159");
    console.log(evento.promise, evento.reason);
});

let promesa = promesaRechazada();

setTimeout(()=> promesa.catch(), 0);