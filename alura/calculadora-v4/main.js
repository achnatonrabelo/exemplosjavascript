const teclas = document.querySelectorAll('.tecla');

const display = document.querySelector('input[type=text]');

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
            valor = Number.parseInt(displayContent);
            console.log("Variável valor: " + typeof valor + " | " + valor);
        };
    }

    if (tecla.className == "tecla operador") {
        tecla.onclick = () => {
            if (displayContent != "") {
                ope = tecla.value;
                clearDisplay();
                console.log("result: " + result);
                console.log("valor: " + valor);
                console.log("oper: " + tecla.value);
                console.log(display.placeholder);
                executaOperacao();
            }
        }
    }
});

function clearAll() {
    displayContent = "";
    display.placeholder = displayContent;
    result = 0;
    valor = 0;
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
        result += valor;
        valor = 0;
        console.log("Valor atual de valor: " + valor);
        console.log("Valor atual de result: " + result);
    }
    
    if (ope == "-") {
        valor = Number.parseInt(valor);
        result -= valor;
        valor = 0;
    }

    if (ope == "x") {
        valor = Number.parseInt(valor);
        result *= valor;
        valor = 0;
    }

    if (ope == "&#XF7;") {
        valor = Number.parseInt(valor);
        result /= valor;
        valor = 0;
    }
}

function mostraResultado() {
    executaOperacao();
    console.log("Resultado: " + result);
    displayContent = result;
    display.placeholder = displayContent;
    result = 0;
    displayContent = "";
}
