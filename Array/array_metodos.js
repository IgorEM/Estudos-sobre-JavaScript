const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no inicio
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa quebrou :(

    console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array S(L)ICE a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //pega do indice 1 a o 3
console.log(pilotos)
console.log(algunsPilotos2)