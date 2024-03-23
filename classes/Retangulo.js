// Definindo uma classe através de class expressions

// Classe não momeada
const Retangulo = class {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calculaArea();
    }

    /** Retorna a area de um retângulo */
    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo(10,10);

console.log(quadrado.area);
