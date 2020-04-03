let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // tem prioridade maior, precendencia
console.log(num1)

console.log(++num1 === num2--) // num2-- só foi executado depois de comparar
console.log(num1 === num2) // aquielesjatem o valor diferente o num-- ja foi executado