//pessoa -> 31434(ed de memoria) -> {'Joao'}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
//pessoa -> 31434(ed de memoria) -> {'Pedro'}
console.log(pessoa)

//pessoa -> 45643(novo end de memoria) -> {...}
//pessoa = {nome: 'Ana'} erro, tentando cria outro objeto com o mesmo nome

Object.freeze(pessoa) //congelando o objeto pessoa

pessoa.nome = 'Maria' //faz nada ta congelado
pessoa.end = 'Rua abc' //faz nada ta congelado
delete pessoa.nome //faz nada ta congelado

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: `Igor Eduardo Mascarenhas`})
pessoaConstante.nome = 'Rute Lima Nascimento' // to freeze papai
console.log(pessoaConstante)