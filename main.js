function tocaSom(idelementoAudio){
    document.querySelector(idelementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idTecla = `#som_${instrumento}`; // Template string

    tecla.onclick = function(){
        tocaSom(idTecla);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}


