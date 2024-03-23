/*
Você faz parte de uma equipe de desenvolvimento de software que recebeu uma
nova demanda de um cliente novo da empresa em que trabalha: criar a lógica de
negócios para um sistema de banco virtual. Para começar crie uma classe Conta
que terá as seguintes funcionalidades:
    - consultar saldo
    - realizar deposito
    - realizar saque
    - realizar tranferência entre contas
*/

class Conta {
    constructor(titular, saldo, numero) {
        this._titular = titular;
        this._saldo = saldo;
        this._numero = numero;
    }

    get titular() {
        return this._titular.toUpperCase();
    }

    get numero() {
        return this._numero;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        if (this.validarValor(valor)) {
            return 'Valor incorreto.'    
        }

        this._saldo -= valor;

        conta.depositar(valor);

        return 'Tranferência realizada com sucesso.'
    }

    cosultarSaldo() {
        const fsaldo = Intl.NumberFormat(
            'pt-BR', { style: 'currency', currency: 'BRL' }
        ).format(this._saldo);
        return fsaldo;
    }

    atualizarTitular(nomeTitular) {
        this.titular = nomeTitular;
    }

    infoConta() {
        const info = `Titular: ${this.titular}\n` +
        `Saldo: ${this.cosultarSaldo()}\n` +
        `Conta: ${this.numero}`;

        return info;
    }

    validarValor(valor) {
        if (valor <= 0.0) {
            return false;
        }

        if (valor > this._saldo) {
            return false;
        }

        return true;
    }
}


const c1 = new Conta('Aroldo Fernandes', 4500, 1010);
const c2 = new Conta('Jaqueline Santos', 10200, 1011);

console.log(c1.infoConta());

console.log();

console.log(c2.infoConta());

console.log('-------------------------------------');

c1.transferir(1000, c2);

console.log(c1.infoConta());

console.log();

console.log(c2.infoConta());

