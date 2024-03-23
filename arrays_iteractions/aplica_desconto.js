const precos = [
  1535.0,
  4999.9,
  345.6,
  99.9,  
];

const precos_com_desconto = []

function aplicaDesconto(preco) {
    preco = preco - preco * 0.10;
    precos_com_desconto.push(preco);
}

precos.forEach(aplicaDesconto);

console.log(precos_com_desconto);
