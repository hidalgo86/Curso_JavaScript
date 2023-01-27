/*
Lista de clases disponibles:

Error
AggregateError 
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError

*/

function errorReferencia(){
    throw new ReferenceError("un error de referencia");
}

function errorComun(){
    throw new Error("un error común");
}

function ejecutar(){
    try{
       // errorComun();
        errorReferencia();
    }catch(error){
        console.log("%c Error: ", "color: yellow", error);
    }
}

ejecutar();