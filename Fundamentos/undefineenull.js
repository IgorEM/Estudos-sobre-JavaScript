const a = {name:'teste'} // const a, tem o endereço pra onde o objeto está apontado
console.log(a)

const b = a //endereço de a igual o de b, mesmo local de memoria, atribuiçao por referencia

b.name = 'opa'
console.log(b)
console.log(a)

let c = 3
let d = c //copia por valor
d++
console.log(c)
console.log(d)
console.log(c)