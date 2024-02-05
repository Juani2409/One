let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento(){
   let numeroDeUsuario = document.getElementById('valorUsuario').value;
console.log(intentos);

   if(numeroDeUsuario == numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}!`)
   document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    //El usuario no acertó
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor')
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {
  
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado
    }
    
}


function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el noton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();