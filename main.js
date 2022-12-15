function tocaSom(idelementoAudio){
    document.querySelector(idelementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_splash');
    }
    contador++;
    console.log(contador)
}


