let listaDeNumerosSorteados = [];
let numeroLimite             = 10;
let numeroSecreto           = gerarNumeroAleatorio();
let tentativas              = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

function gerarNumeroAleatorio(){
    // Gera um número aleatório
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    // A função includes(elemento) verifica se o elemento dentro dos parenteses está contido em uma array referênciado retornando TRUE se sim 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector( "input" );
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute () {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if  (chute == numeroSecreto){

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentiva';
        let mensagemTentativas = `Voçê acertou com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        tentativas ++;

        limparCampo();
    }
}

exibirMensagemInicial();

