// Formatação de número sensível ao idioma
const salario = 8500.00

// Salário no formato brasileiro
const salarioBR = new Intl.NumberFormat(
    'pt-BT', { style: 'currency', currency: 'BRL'}
).format(salario);

// Salário no formato americano
const salarioUS = new Intl.NumberFormat(
    'en-US', { style: 'currency', currency: 'USS'}
).format(salario);
console.log(salarioBR);
console.log(salarioUS);

// Formatando números com duas casas decimais após a vígula
const numeroQualquer = 157.569882;

const numeroQualquerFormatado = new Intl.NumberFormat(
    'pt-br', {style: 'decimal', maximumFractionDigits: 4
}).format(numeroQualquer);

console.log(numeroQualquerFormatado);
