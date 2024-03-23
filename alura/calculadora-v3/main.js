const teclas = document.querySelectorAll('.botaoNumerico');

console.log(teclas);

const display = document.querySelector('input[type=text]');

let displayContent = '';

function showScreenContent(tecla) {
    displayContent += teclas[tecla].value;
    display.placeholder = displayContent;
}

function clearScreen() {
    displayContent = '';
    display.placeholder = displayContent;
}

function backspace() {
    displayContent = displayContent.substring(0, displayContent.length - 1);
    display.placeholder = displayContent;
}