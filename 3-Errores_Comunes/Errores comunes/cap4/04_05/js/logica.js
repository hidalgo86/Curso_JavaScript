function blancoNegro(data) {
  for (var i = 0; i < data.length; i+= 4) {
    let gris = data[i] * .3 + data[i+1] * .59 + data[i+2] * .11;
    data[i] = gris; 
    data[i+1] = gris; 
    data[i+2] = gris; 
  }
}

function iniciar(){
  let source = document.getElementById("source");
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext('2d');
  canvas.width = source.width;
  canvas.height = source.height;
  contexto.drawImage(source, 0, 0);

  let imgData = contexto.getImageData(0, 0, canvas.width, canvas.height);
  
  blancoNegro(imgData.data);
  
  contexto.putImageData(imgData, 0, 0);
}

window.addEventListener('load', iniciar);