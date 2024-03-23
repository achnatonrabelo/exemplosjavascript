/*const teclaUm = document.getElementById('teclaUm').value;
const teclaDois = document.getElementById('teclaDois').value;
const teclaTres = document.getElementById('teclaTres').value;
const teclaQuatro = document.getElementById('teclaQuatro').value;
const teclaCinco = document.getElementById('teclaCinco').value;
const teclaSeis = document.getElementById('teclaSeis').value;
const teclaSete = document.getElementById('teclaSete').value;
const teclaOito = document.getElementById('teclaOito').value;
const teclaNove = document.getElementById('teclaNove').value;
const teclaZero = document.getElementById('teclaZero').value;

console.log(teclaUm);
console.log(teclaDois);
console.log(teclaTres);
console.log(teclaQuatro);
console.log(teclaCinco);
console.log(teclaSeis);
console.log(teclaSete);
console.log(teclaOito);
console.log(teclaNove);
console.log(teclaZero);*/

const teclas = document.querySelectorAll('input[type=button]');
console.log(teclas);
const display = document.querySelector('input[type=tel]');

let displayContent = '';

function teclaUm() {
    displayContent += teclas[8].value;
    display.placeholder = displayContent;
}

function teclaDois() {
    displayContent += teclas[9].value;
    display.placeholder = displayContent;
}

function teclaTres() {
    displayContent += teclas[10].value;
    display.placeholder = displayContent;
}

function teclaQuatro() {
    displayContent += teclas[4].value;
    display.placeholder = displayContent;
}

function teclaCinco() {
    displayContent += teclas[5].value;
    display.placeholder = displayContent;
}

function teclaSeis() {
    displayContent += teclas[6].value;
    display.placeholder = displayContent;
}

function teclaSete() {
    displayContent += teclas[0].value;
    display.placeholder = displayContent;
}

function teclaOito() {
    displayContent += teclas[1].value;
    display.placeholder = displayContent;
}

function teclaNove() {
    displayContent += teclas[2].value;
    display.placeholder = displayContent;
}

function teclaZero() {
    displayContent += teclas[13].value;
    display.placeholder = displayContent;
}

function adicao() {
    displayContent += teclas[3].value;
    display.placeholder = displayContent;
}

function backspace() {
    displayContent = displayContent.substring(0, displayContent.length - 1);
    display.placeholder = displayContent;
}

function clearScreen() {
    displayContent = '';
    display.placeholder = displayContent;
}
