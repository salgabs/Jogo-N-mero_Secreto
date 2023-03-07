function verificaValorChute(chute) {
    const numero = Number(chute);

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }

    if(numeroLimiteMaxMin(numero)) {

        elementoChute.innerHTML += `<div>Valor Inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>

            <button id="botao" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor
        <i class="fa-solid fa-down-long"></i></div>`
    } if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior
        <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroLimiteMaxMin (numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id === 'botao') {
        window.location.reload();
    }
});