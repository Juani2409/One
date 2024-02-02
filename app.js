let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = document.getElementById('valorUsuario').value;
   console.log(numeroDeUsuario);
   console.log(numeroSecreto);
   console.log(numeroDeUsuario == numeroSecreto);
    return;
}

function generarNumeroSecreto() {
  
    return Math.floor(Math.random()*10)+1;
    
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 10');
