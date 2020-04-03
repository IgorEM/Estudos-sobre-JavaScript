function criarProduto(nome, preco){
    const desconto = 0.5
    const precoavista = preco * desconto
    return{
        nome,
        preco,
        desconto,
        precoavista
    }
}

console.log(criarProduto('Notebook', 2199))
console.log(criarProduto('Ipad', 1199))