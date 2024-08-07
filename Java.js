let cores = document.getElementById('corpo');

function gerarNumero() {
    let numeroAleatorio = parseInt(Math.random() * 1000 + 1);
    if (numeroAleatorio % 2 === 0) {
        cores = bloco.style.backgroundColor = "blue"
    } else {
        cores = bloco.style.backgroundColor = "red"
    }
    document.getElementById("resultadoCalculo").innerHTML = numeroAleatorio;
}

function zerar () {
    document.getElementById("resultadoCalculo").innerHTML = 0
    cores = bloco.style.backgroundColor = "purple"
}