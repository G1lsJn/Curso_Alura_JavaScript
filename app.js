alert('Boas Vindas ao jogo do número secreto');

let numeroLimite = 100;

let numeroSecreto = parseInt(Math.random() * numeroLimite + 1); //gera um número entre 1 e 10
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while(chute != numeroSecreto){

    chute = prompt('Escolha um número entre 1 e ', numeroLimite);

    if(numeroSecreto == chute){
        break;
    } else{
        if(chute > numeroSecreto){
            alert( 'Seu chute foi maior que o número secreto, tente novamente!');
        } else{
            alert( 'Seu chute foi menor que o número secreto, tente novamente!');
        }

        tentativas ++;
    }
}

// Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
