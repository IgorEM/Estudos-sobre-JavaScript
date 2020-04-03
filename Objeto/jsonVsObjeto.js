const obj = { a: 1, b:2, c: 3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj)) //JSON.stringify converte um objeto para Json

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) //nao eh JSON
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) //nao eh JSON

console.log(JSON.parse('{ "a": 1, "b" : 2, "c": 3}')) // objeto gerado a partir de um texto JSON
console.log(JSON.parse('{"a": 1.8, "b": "texto string", "c": true, "d": {}, "e": [] }')) 
