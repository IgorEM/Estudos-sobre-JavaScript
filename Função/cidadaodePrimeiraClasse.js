// Função em JS é First-Class Object (Citizens) //cidadao de primeira linha quando a funçao age como dado
//Higher-Order function


//criar de forma literal
function fun1(a, b) {
    //se nao retornar nada , retorna undefined
    mult = a * b
    return console.log(mult)

}

//armazenar em uma variavel
function fun2(c, d) {
    sub = c - d 
    return console.log(sub)
}


//armazenar em um array
const array = [function (e, f) { return e + f }, fun1, fun2]
console.log(array[0](2,3))

//armazenar em umatributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma função pode retorna/conter uma função
function soma(a,b){
    return function (c) {
        console.log(a+b+c)
    }
}

soma(8,48)(72)
console.log(`........................................................................................................`)
const cincoMais = soma(2,3)
cincoMais(4)