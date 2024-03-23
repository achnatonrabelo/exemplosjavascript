/* Crie uma função que receba três parâmetros:
1) produto: nome do produto a venda
2) preco: preço oficial de venda do produto
3) desconto: desconto a ser aplicado ao produto vendido.

A função deve retornar uma string contendo a descrição
do produto, o valor original do produto, e o valor com desconto
*/

function aplicarDescontos(produto, preco, desconto) {
    const valorComDesconto = preco - (preco * desconto);
    
    const msg = `Produto: ${produto}
            \rPreço: ${preco}
            \rValor com Desconto: ${valorComDesconto}`;

    return msg;
}

console.log(aplicarDescontos('iPhone 13', 6500.00, 0.10));
