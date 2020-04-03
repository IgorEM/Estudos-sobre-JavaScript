let comparaComThis = function (param) { //numa funçao normal o this nao eh o this muitas vezes
    console.log(this === param)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora ta apontando para obj :D 

comparaComThis(global) //agora ta pra obj
comparaComThis(obj) // confirmando

let comparaComThisArrow = param => console.log(this === param)// no caso de um arrow ele nao aponta pro global. // aponta pra funcao que foi escrita 
comparaComThisArrow(global) // não aponta pro global. 
comparaComThisArrow(module.exports) //aponta pro modulo corrente
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow (obj)
comparaComThisArrow(module.exports) // originalmente pro objeto que foi escrito , nao varia de forma alguma