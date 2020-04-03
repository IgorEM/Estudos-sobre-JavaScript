function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0 //let é privado na funçao, se for variavel use let

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //instanciou
for (let i = 0; i < 30; i++) {
    uno.acelerar()
}
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //instanciou e mudou o delta e velocidade maxima
for (let i = 0; i < 15; i++) {
    ferrari.acelerar()
}
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)