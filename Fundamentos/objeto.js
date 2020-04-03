const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4957.89
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

console.log(' ')

const prod2 = {
    nome: 'Camisa Polo',
    preco: 49.90,
    
    obj: {
        cor: 'chupeta',
        
        obj1:{
            numero: 2,
           
        }
    }
}
console.log(prod2)

console.log(' ')

const prod3 = {
    nome: 'Camisa Polo',
    preco: 49.90,
}
console.log(prod3)
// Json - forma de trocar informaçoes entre sistemas , formato textual, diferença entre json é texto e objeto é atributos.
'{ "nome": "Camisa Polo", "preco": 49.90}'