class Conta {
    constructor(titular, saldo, numero) {
        this._titular = titular;
        this._saldo = saldo;
        this._numero = numero;
    }   

    get titular() {
        return this._titular;
    }

    set titular(nomeTitular) {
        this._titular = nomeTitular;
    }

    get saldo() {
        const fsaldo = Intl.NumberFormat(
            'pt-BR', {style: 'currency', currency: 'BRL'}
        ).format(this._saldo);
        return fsaldo;
    }
    
}

const c1 = new Conta("Fernanda Miranda", 25000);
const c2 = new Conta('Achnaton Rabelo', 62000);

console.log(c1.titular);
console.log(c1.saldo);
console.log(c2.titular);
console.log(c2.saldo);
console.log(c2);

c1.titular = "Fulano de Tal";

console.log(c1.titular);
