function real(partes, ...valores){
    const resultado = []
    valores.forEach( (valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //se nao for um numero, retorna mesma coisa, se for retorna simbolo do real mais duas casas decimais
        resultado.push(partes[indice], valor)
    } )
    return resultado.join('')
}

const preco = 23.993498456465874965465465
const precoParcela = 8
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)