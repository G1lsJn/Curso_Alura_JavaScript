
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Tratamento de erros
    if (elemento  != null && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log("O seletor não foi encontrado ou inválido!");
        }
}

//seleciona todas as teclas do jogo
const listaDeTeclas = document.querySelectorAll(".tecla"); 

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    //captura a tecla atual
    const tecla = listaDeTeclas[contador];

    //pega o nome da classe que é o instrumento
    const instrumento = tecla.classList[1];

    // Templete string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Configurando as teclas do teclado pra manipular o site
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}
