function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min //random gera um valor entre 0 e 1 se f or 0 vai dar o minimo se for 1 vai dar o maximo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1 , 10)
    console.log(`opção escolhida foi ${opcao}`)
}
console.log ('Até a proxima!') 