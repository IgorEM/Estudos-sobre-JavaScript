console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ( 'bia', 'jose', 'limao')
console.log(aprovados)

aprovados = ['Joao', 'Maria', 'abacaxi']
console.log(aprovados[0])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined indice vai ate 2 nesse array
aprovados[3] = 'paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

console.log(aprovados[4])

aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort() //altera o array original
console.log(aprovados)

let cores = ['vermelho', 'azul', 'verde', 'amarelo','roxo','rosa']
console.log(cores)
delete cores[1] //a posiçao deletada fica vazia
console.log(cores)

cores.splice(2,1) //remove e modifica o array, a partir do indice 2 remove 1 elemento
console.log(cores)

cores.splice(1,1,'preto')
console.log(cores)

cores.splice(2,0,'branco', 'cinza') //splice(indice,quant elem excluir,'elem pra add')
console.log(cores)
