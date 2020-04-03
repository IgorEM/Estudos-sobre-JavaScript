const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach é uma funçao de array que age sobre cada um de seus elementos //callback da funçao

fabricantes.forEach(function (fabricante){
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))