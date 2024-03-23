const carro = {
    _fabricante: 'Fiat',
    _modelo: 'Pálio',
    _ano: 2014,
    _cor: 'amarelo',
    get fabricante() {
        return this._fabricante;
    },
    get modelo() {
        return this._modelo;
    },
    get ano() {
        return this._ano;
    },
    get cor() {
        return this._cor;
    },

    // Métodos do carro
    ligar: function() {
        console.log('Carro ligado.');
    },
    deligar: function() {
        console.log('Carro desligado.');
    },
    acelerar: function() {
        console.log('Carro acelerando...');
    },
    frear: function() {
        console.log('Carro freando...');
    },
    info: function() {
        return `Fabricante: ${this._fabricante}
        \rModelo: ${this._modelo}
        \rAno: ${this._ano}
        \rCor: ${this._cor}`
    },
}

console.log(carro.fabricante);
console.log(carro.modelo);