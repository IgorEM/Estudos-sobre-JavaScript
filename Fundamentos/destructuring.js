// novo recurso do ES2016
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Feliz',
        numero: 889
    }
}
const { nome, idade } = pessoa // {} <- destructuring , extrai nome e idade de pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*const { conta: { ag, num } } = pessoa
console.log(ag,num)*/