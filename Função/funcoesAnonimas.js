const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x-y
}) // 3-4 = -1

imprimirResultado(3,4, (x,y) => x*y)

const pessoa = {
    falar: function(){

        console.log('Opa')
    },
    saudacao(){

        console.log('Diz tu')
    }
    

    }

pessoa.falar()
pessoa.saudacao()