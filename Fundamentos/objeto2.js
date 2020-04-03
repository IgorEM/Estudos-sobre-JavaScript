console.log(typeof Object) //function
console.log(typeof new Object()) //object  chamando construtor

const Cliente = function(){} //funçaovazia
console.log(typeof Cliente)
console.log(typeof new Cliente)

console.log('---------------------------------------------------------------------')
class Produto{}//ES 2015 (ES6) //classe é o molde
console.log(typeof Produto)
console.log(typeof new Produto())
