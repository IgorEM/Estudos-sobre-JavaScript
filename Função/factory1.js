const prod1 = {
    nome: 'Chupeta verde',
    preço: 0.54
}

const prod2 = {
    nome: 'Chupeta rosa',
    preço: 0.74
}

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())