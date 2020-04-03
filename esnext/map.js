// map , pode inserer na chave do objeto uma função,array ou objeto

const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework)

const cahvesVariadas = new Map([
    [function () { } , 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

cahvesVariadas.forEach( (valor, chave) => {
    console.log(chave, valor)
})

console.log(cahvesVariadas.has(123))
cahvesVariadas.delete(123)
console.log(cahvesVariadas.has(123))

console.log(cahvesVariadas.size)

cahvesVariadas.set(123, 'a')
cahvesVariadas.set(1, 'a')
cahvesVariadas.set(2, 'a')
cahvesVariadas.set(3, 'b')
