const teclas = document.querySelectorAll('.tecla');

const display = document.querySelector('input[type=text]');

let valores = [];
let displayContent = '';
let result = 0;
let valor = 0;
let ope = '';

teclas.forEach((e, i) => {
    const tecla = teclas[i];

    // Pressionamento das teclas numéricas
    if (tecla.className === "tecla numero") {
        tecla.onclick = () => {
            if (ope == "") {
                valores = [];
            }

            displayContent += tecla.value;
            display.placeholder = displayContent;
            valor = Number.parseFloat(displayContent);
        };

    }


    // Pressionamento das teclas de operação
    if (tecla.className === "tecla operador") {
        tecla.onclick = () => {
            if (valor !== undefined && valor !== 0) {

                if (ope == "%") {
                    valor = valor / 100;
                    // TODO: substituir o ultimo valor do array valores pelo novo valor
                    valores.pop();
                    valores.push(valor);
                    ope = "";
                }

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

    tecla.onkeydown = (event) => {
        console.log(event);
        if (event.code === "Enter" || event === "Space") {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = (event) => {
        tecla.classList.remove('ativa');
    }
});


function clearAll() {
    displayContent = "";
    display.placeholder = displayContent;
    result = 0.0;
    valor = 0;
    ope = "";
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
        result = valores.reduce((t, v) => t + v);
    }

    if (ope == "-") {
        result = valores.reduce((t, v) => t - v);
    }

    if (ope == "x") {
        result = valores.reduce((t, v) => t * v);
    }

    if (ope == "/") {
        result = valores.reduce((t, v) => t / v);
    }

    if (ope == "%") {
        //TODO: Cálculo da porcentagem aqui
    }
}

function mostraResultado() {
    console.log("Valor: " + valor + " | " + "Valores: " + valores);
    if (valor !== undefined) {
        valores.push(valor);
    }

    executaOperacao();
    displayContent = result;
    display.placeholder = displayContent;
    displayContent = "";
    valores = [];
    valores.push(result);
    valor = 0;
    result = 0;
    ope = "";
    console.log(`Valores: ${valores} | Valor: ${valor} | Result: ${result} | Ope: ${ope}`);
}
