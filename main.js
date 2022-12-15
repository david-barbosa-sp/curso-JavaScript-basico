function tocaSom(idelementoAudio){
    document.querySelector(idelementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    // Template string
    const idTecla = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idTecla);
    }
    contador++;
    
}


