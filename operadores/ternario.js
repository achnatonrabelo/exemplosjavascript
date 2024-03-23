const idade = 15;

/* 
OBS: Não é recomendada a utilização do operador ternário de 
forma aninhada, pois prejudica a clareza do código.
*/

const maioridade = idade >= 18 ? 'Maior de idade' : 'Menor de idade';

const bebidaPermitida = idade >= 18 
    ? 'Você pode consumir bebida alcoólica' 
    : 'Você não pode consumir alcool'

console.log(maioridade);
console.log(bebidaPermitida);