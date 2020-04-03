// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } //sombreamento
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attrA)
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else { this.velAtual = this.velMax }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing , sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}:  ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
