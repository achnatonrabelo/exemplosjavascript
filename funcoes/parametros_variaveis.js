// Funções definidas sem parâmetros podem receber argumentos e processá-los
// OBS: esta é a forma antiga de se utilizar argumentos arbitrários
// Toda função possui um objeto chamado arguments que possui 
// todos os argumentos passados para a função
function soma() {
    let soma = 0;

    for (i in arguments) {
        soma += arguments[i];
    }

    return soma;
}

console.log(soma(10, 5, 3, 6));
