let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
console.log(!true)
console.log(!!true)

console.log('Os Verdadeiros...')
console.log(!!3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!(''|| null || 0 || "epa")) 
console.log(''|| null || 0 || "epa") //retorna o primeiro verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')


let nome1 = 'Lucas'
console.log(nome1 || 'Desconhecido')