// Object.preventExtensions -> nao adiciona novos atributos mais pode excluire modificar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //nao pode adicionar
delete produto.tag

console.log(produto)

//Object.seal -> nao adiciona novos atributos e nao pode excluir, mas pode modificar
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29 
console.log(pessoa)

//Object.freeze = selado + valores constantes
const geometrico = {obj: 'triangulo', area: 4}
Object.freeze(geometrico)

geometrico.obj = 'quadrado' //n modifica
geometrico.cor = 'azul' // n adiciona
delete geometrico.area // n exclui
console.log(geometrico)