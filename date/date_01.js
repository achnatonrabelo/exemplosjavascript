// Retornando o mês com dois dígitos
const data = new Date();

console.log(data)

let mes = data.getUTCMonth() + 1;

mes = ('0' + mes).slice(-2);

console.log(mes);
