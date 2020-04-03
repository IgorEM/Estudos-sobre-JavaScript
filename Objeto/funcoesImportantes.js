const person = {
    name: 'Igor Eduardo Mascarenhas',
    age: 21,
    weight: 66
}

console.log(Object.keys(person))
console.log("\n"); // pula linha
console.log(Object.values(person))
console.log("\n"); // pula linha
console.log(Object.entries(person))
console.log("\n"); // pula linha

Object.entries(person).forEach(e => {
    console.log(`${e[0]} ===============> ${e[1]} `)
})
console.log("\n"); // pula linha
Object.entries(person).forEach( ([chave, valor]) /*destructuring*/ => {
    console.log(`${chave} :) ----> :D ${valor}`)
})
console.log("\n"); // pula linha
Object.defineProperty(person, 'dataNascimento', {
    enumerable: true, //vai ser listada
    writable: false, // nao pode ser modificada
    value: '18/03/1997'
})
console.log("\n"); // pula linha
person.dataNascimento = '01/01/1973' //writable: false
console.log(person.dataNascimento)
console.log("\n"); // pula linha
console.log(Object.keys(person))
console.log("\n"); // pula linha
console.log(person)
console.log("\n"); // pula linha

//Object.assign (ECNAScript 2015)
const dest = {a : 1}
const o1 = { b : 2}
const o2 = {c : 3, a : 4}

const obj = Object.assign(dest, o1, o2) //concatena em um objeto só

obj.c = 1232
Object.freeze(obj)
obj.c = 98498
console.log(obj)