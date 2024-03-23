class Triangulo {
    constructor(la, lb, lc) {
        this.la = la;
        this.lb = lb;
        this.lc = lc;
    }

    /** Calcula a área do triângulo através da fórmula de Heron, com 
     * base apenas nas informações dos três lados.
    */
    calculaArea() {
        const sp = (this.la + this.lb + this.lc) / 2;

        const area = Math.sqrt(
            sp * (sp - this.la) * (sp - this.lb) * (sp - this.lc)
        );
        return area;
    }

    classificar() {
        let classificacao;

        if (this.la === this.lb && this.la === this.lc) {
            return classificacao = 'Equilátero';
        }
        
        if (this.la !== this.lb && this.la !== this.lc) {
            return classificacao = 'Escaleno';
        }

        return classificacao = 'Isósceles';
    }
}

const tri01 = new Triangulo(5, 6, 3);

console.log('Area do triângulo: ' + tri01.calculaArea());
console.log('Classificação: ' + tri01.classificar());
