const carro = {
    fabricante: 'Fiat',
    modelo: 'Pálio',
    ano: 2014,
    cor: 'amarelo',

    // Métodos do carro
    ligar() {
        console.log('Carro ligado.');
    },
    deligar() {
        console.log('Carro desligado.');
    },
    acelerar() {
        console.log('Carro acelerando...');
    },
    frear() {
        console.log('Carro freando...');
    },
    info() {
        return `Fabricante: ${this.fabricante}
        \rModelo: ${this.modelo}
        \rAno: ${this.ano}
        \rCor: ${this.cor}`
    }
}

console.log(carro.info());