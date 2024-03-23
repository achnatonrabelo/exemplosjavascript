// Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
/** Retorna o nome completo de uma pessoa */
function nomeCompleto(nome, sobreNome) {
    return nome + ' ' + sobreNome; 
}

const nome = 'Brenda';
const sobreNome = 'Garcia';

// Uma função só executa seu código quando é chamada (invocada)
// 1ª chamada da função
console.log(nomeCompleto(nome, sobreNome));

// 2ª chamada da função
const nomeAluno = nomeCompleto('Cristiana', 'Bernardes');
console.log(nomeAluno);

// Definindo uma função sem retorno de valor
// Uma função que não retorna um valor, também pode ser chamada de procedimento
function saudacao() {
    console.log('Olá, sejma todos bem vindos(as)!');
}

// Chamada à função saudacao()
saudacao();

let anonima = function () {
    console.log('Eu sou uma função anônima armazenada em uma variável');
}

anonima();
