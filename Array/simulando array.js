const quaseArray = {0: 'ane', 1: 'jose', 2:'chupeta'}
console.log(quaseArray)

console.log(quaseArray[0]) //atributo de um objeto a partir de colchetes

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})



const meuArray = ['Rafael', ' ana', 'bia']

console.log('\n', quaseArray.toString(), meuArray)