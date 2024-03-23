// Funções definidas sem parâmetros podem receber argumentos e processá-los
// OBS: esta é a forma antiga de se utilizar argumentos arbitrários
// Toda função possui um objeto chamado arguments que possui 
// todos os argumentos passados para a função
function soma(...nums) {
    let s = 0;

   nums.forEach(element => {
    s += element; 
   });

    return s;
}

let s = 100;
console.log(s);

// console.log(soma(10, 5, 3, 6, 100));
