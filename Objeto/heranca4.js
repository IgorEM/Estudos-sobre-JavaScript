function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Igor'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}
//.__proto__ objeto , .prototype , função

obj1.falar()

obj2.nome = 'Mascarenhas'
obj2.falar()

obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //mudou
obj3.nome = 'I'
obj3.falar()

//Resumindo a loucura...
console.log( (new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)