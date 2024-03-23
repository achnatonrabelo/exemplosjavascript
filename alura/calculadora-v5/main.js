const teclas = document.querySelectorAll('.tecla');

const display = document.querySelector('input[type=text]');

let valores = [];
let displayContent = '';
let result = 0;
let valor = 0;
let ope = '';

teclas.forEach((e, i) => {
    const tecla = teclas[i];

    if (tecla.className === "tecla numero") {
        tecla.onclick = () => {
            displayContent += tecla.value;
            display.placeholder = displayContent;
            valor = Number.parseFloat(displayContent);
        };
    }

    if (tecla.className == "tecla operador") {
        tecla.onclick = () => {
            if (valor !== undefined) {
                valores.push(valor);
            }

            if (valores.length > 0) {
                ope = tecla.value;
                console.log("Valor: " + valor + " | " + "Valores: " + valores + " Ope: " + tecla.value);
                console.log(result);
                clearDisplay();
                executaOperacao();
            }
        }
    }
});

function clearAll() {
    displayContent = "";
    display.placeholder = displayContent;
    result = 0.0;
    valor = 0;
    valores = [];
}

function clearDisplay() {
    displayContent = "";
    display.placeholder = displayContent;
}

function clearCharacter() {
    const tamanho = displayContent.length;
    displayContent = displayContent.substring(0, tamanho - 1); //Senac
    display.placeholder = displayContent;
}

function executaOperacao() {
    if (ope == "+") {
        result = valores.reduce((total, valor) => total + valor);
    }

    if (ope == "-") {
        result = valores.reduce((total, valor) => total - valor);
    }

    if (ope == "x") {
        result = valores.reduce((total, valor) => total * valor);
    }

    if (ope == "/") {
        result = valores.reduce((total, valor) => total / valor);
    }
}

function mostraResultado() {
    if (valor !== undefined) {
        valores.push(valor);
    }

    executaOperacao();
    console.log("Resultado: " + result);
    displayContent = result;
    display.placeholder = displayContent;
    result = 0;
    displayContent = "";
    valores = [];
    valor = 0;
}
