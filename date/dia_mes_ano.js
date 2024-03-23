// Retorna um objeto do tipo Date (data)
const data = new Date();

// Métodos que recuperam o dia, mês e ano, respectivamente, de uma objeto Date
const dia = data.getDate() + 1;
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

console.log("Dia:", dia);
console.log("Mês:", mes);
console.log("Ano:", ano);
console.log(`Hora atual: ${hora}:${minutos}`);
