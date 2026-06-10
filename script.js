// Funções de acessibilidade
function aumentarFonte() {
    let tamanho = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanho + 2) + "px";
}

function diminuirFonte() {
    let tamanho = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanho - 2) + "px";
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}

function alternarModoEscuro() {
    document.body.classList.toggle("modo-escuro");
}

// Calculadora de consumo de água
function calcularConsumo() {
    // Obtém os valores digitados pelo usuário
    const litrosIniciais = Number(document.getElementById("litros").value);
    const usoPorMinuto = Number(document.getElementById("uso-por-minuto").value);
    const tempoUso = Number(document.getElementById("tempo-uso").value);

    // Verifica se todos os campos foram preenchidos corretamente
    if (
        litrosIniciais <= 0 ||
        usoPorMinuto <= 0 ||
        tempoUso <= 0
    ) {
        document.getElementById("resultado").textContent =
            "Por favor, preencha todos os campos com valores maiores que zero.";
        return;
    }

    // Calcula o consumo total
    const consumoTotal = usoPorMinuto * tempoUso;

    // Calcula a quantidade restante de água
    const aguaRestante = litrosIniciais - consumoTotal;

    // Exibe o resultado
    if (aguaRestante >= 0) {
        document.getElementById("resultado").innerHTML =
            `<strong>Resultado:</strong><br>
            Água consumida: ${consumoTotal} litros.<br>
            Água restante: ${aguaRestante} litros.`;
    } else {
        document.getElementById("resultado").innerHTML =
            `<strong>Atenção!</strong><br>
            O consumo foi de ${consumoTotal} litros.<br>
            Você utilizou ${Math.abs(aguaRestante)} litros a mais do que possuía.`;
    }
}
