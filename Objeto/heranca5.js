console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//criando uma nova funcionalidade na função String 
//split = quebra a string em letras e gera um array inclusive espaços em brancos
// o reverse eh uma funcionalidade de array
//join junta todos em uma string
console.log('igoR eduardO m@sc@renh@S'.split('r')) // toda vez que encontrar um r divide


String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('igoR eduardO m@sc@renh@S'.reverse())




Array.prototype.first = function() {
    return this[0]
}


console.log([1,2,3,5].first())

//String.prototype.toString = function (){
//    return 'lascou tudo'
//}

console.log('Escola Cod3r'.reverse())