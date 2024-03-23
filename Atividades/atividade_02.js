/*
Crie um script que leia um array que mantém uma lista de objetos javascript. 
Os objetos que compõem o array são do tipo carro, contendo cada as seguintes
chaves: “marca”, “modelo” e “ano”. Após criar o array, liste seu conteúdo de 
duas maneiras, uma com a estrutura de repetição FOR e outra com a FOR..IN.
*/

const carros = [
    { marca: 'Fiat', modelo: 'Pálio', ano: 2012 },
    { marca: 'Chevrolet', modelo: 'Onix', ano: 2020 },
    { marca: 'Toyota', modelo: 'Corolla', ano: 2022 },
    { marca: 'Volkswagen', modelo: 'Polo', ano: 2008 },
    { marca: 'Renault', modelo: 'Sandero', ano: 2015 },
];

//Lendo o array com a estrutura FOR tradicional
console.log('CARROS DISPONÍVEIS PARA VENDA:');
let saida = '';
for (let i = 0; i < carros.length; i++) {
    saida += `Marca: ${carros[i].marca} | ` +
        `Modelo: ${carros[i].modelo} | Ano: ${carros[i].ano}\n`
}

console.log(saida);

console.log();

// Lendo o array com a estrutura FOR..IN
for (const carro in carros) {
    console.log(carros[carro].marca);
}