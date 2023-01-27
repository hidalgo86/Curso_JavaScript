
var botones = document.getElementsByTagName('button');
 
for (var i = 0, j = botones.length; i < j; i++) {

    botones[i].addEventListener("click", ()=>{
        console.log("Este es el botón #" + (i + 1));
    });

 //  botones[i].addEventListener("click", crearFuncion(i + 1));

}

function crearFuncion(i){
    return function(){
        console.log("Este es el botón #" + i);
    }
}