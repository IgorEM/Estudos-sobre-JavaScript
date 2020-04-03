console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //=== estritamente igual? ate o tipo?
console.log('03)',  '3' != 3)
console.log('04)', '3' !== 3) // um é tipo string e o outro number

console.log('05)', 3 < 2)
console.log('06)', 3 > 1)
console.log('07)', 3 <=2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log(d1,d2)
console.log('09)', d1 === d2) // referencia de memoria, esta comparando endereço de memoria
console.log('10)', d1 == d2) 
console.log('11)', d1.getTime() === d2.getTime()) // esmo tipo e mesmo valor
console.log('12)', undefined == null)
console.log('13)', undefined === null)  
