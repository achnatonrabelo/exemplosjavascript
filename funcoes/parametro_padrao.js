// Definição de função com parâmetro padrão
function soma(a = 0, b = 0, c = 0) {
    return a + b + c;
}

function multiplicacao(a = 1, b = 1, c = 1) {
    return a * b * c;
}

console.log(soma(10, 5, 3));
console.log(multiplicacao(10, 5));
