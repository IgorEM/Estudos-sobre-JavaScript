const escola = "Cod3r"

console.log(escola.charAt(4)) // posiçao 4 letra r
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // tabela asc

console.log(escola.indexOf('r')) // em que indice esta

console.log(escola.substring(1)) // imprime a partir de um ceto indice
console.log(escola.substring(0,3)) // intervalo de indices

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola + "!" )

console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'e')) //substitua todos os digitos pela letra e
console.log(escola.replace(/\w/g,'e')) //substitua tudo por e, flag global //rejex

console.log('Ana,Maria,Rute'.split(','))
console.log('Ana,Maria,Rute'.split('a'))

