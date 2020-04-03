const aprovados = ['Igor', 'Eduardo', 'Mascarenhas', 'Igor Eduardo Mascarenhas']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(a => console.log(a))
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)