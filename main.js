function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio).play('');

     if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = documento.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length++){

 const instrumento = listaDeTeclas[contador].classList[1];

 const tecla = listaDeTeclas[contador];

 const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classlist.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classlist.remove('ativa');
        }
}

listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocaSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;