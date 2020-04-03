const notas = [4.3, 4.5, 2.9, 9.4, 10]
for (let i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 68
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) //indice do objeto sao os nomes, atributos
}