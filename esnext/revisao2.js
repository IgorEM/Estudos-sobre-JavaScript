//Arrow function / ES6 ECMAScript 2015
const soma = (a,b) => a+b // funçao arrow é uma função anonima sempre vai criar ela e atribuir a uma constante
console.log(soma(1,2))

const soma1 = (c,d) => {
    return c+d
} // se eu quiser botar corpo obrigatoriamente tenho que usar return
console.log(soma1(5,2))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports) // escrita dentro de um arquivo do node , o this aponta pra module.exports
//numa funçao normal o this apona pra global
const lexico2 = lexico1.bind({}) // nao da pra fazer isso //se fosse funçao normal nao apontaria mais para global e sim para o objeto que acabou de definir
lexico1() // os dois continuam apontando pra exports
lexico2()

//parametro default
function mostrar(texto = 'Node'){
    console.log(texto)
}

mostrar() //valor padrao
mostrar('Sou mais forte')
mostrar ( undefined) // valor padrao
mostrar (null) //null

//operadpr rest, agrupar parametros no contexto da função. mas se for trabalhar com objeto, array eh spread, espalhar
function total (...numeros){
    let total = 0
    numeros.forEach( n => total += n) //para cada n de ...numeros , pega n e faz total = total + n
    return total
}
console.log(total (2,3,4,5,1.5,8,2,4,5,6,7,8,4,2,3,4,32,3,4,1,2,5))