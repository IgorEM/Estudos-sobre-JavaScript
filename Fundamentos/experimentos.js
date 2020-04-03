let a = 3 // nao eh exportada nao fica no arquivo eh local

global.b = 123

this.c= 456 //exportar esse cara pra fora do modulo, no node a=cada arquivo eh um modulo diferente

this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log (module.exports)

abc = 3 //criando uma variavel maluca, sem var e let! quer dizer global do node // nao faça isso em casa!
console.log(global.abc)

//module.exports = {e: 456,  f: false, g: 'teste'} // é o this
