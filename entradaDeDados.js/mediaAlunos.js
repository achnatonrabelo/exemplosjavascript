const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = ''

rl.question('Informe seu nome: ', (nome) => {
    rl.question('Informe sua idade: ', (idade) => {
        console.log(`Seu nome é ${nome} e sua idade é: ${idade}`);
        rl.close();
    });
});


