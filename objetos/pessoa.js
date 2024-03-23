// Objetos JavaScript são estruturas de dados que podem armazenar atributos e métodos
// Atributos são as características de um objeto.
// Métodos compreendem as funcionalidades de um objeto.
const nome = 'Virgulino';
const sobrenome = 'Severino';
const idade = 52;

const pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    informacoes: function() {
        return `Nome Completo: ${this.nome} ${this.sobrenome}
        \rIdade: ${this.idade}`;
    }
}

// pessoa.nome = 'Arriobaldo';
// pessoa.sobrenome = 'Severino';
// pessoa.idade = 52;

console.log(pessoa.informacoes());