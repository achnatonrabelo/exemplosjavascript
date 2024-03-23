const produto = {
    fabricante: 'SS Oliveira',
    descricao: 'Feijão Jalo',
    fabricacao: new Date('2022-02-26'),
    peso: 1,
    unidade: 'kg',
    tipo: 'Alimento perecível'
}

for (const key in produto) {
    console.log(`${key} -> ${produto[key]}`);
}