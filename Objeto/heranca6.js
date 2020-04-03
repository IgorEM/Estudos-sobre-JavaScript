function Aula(nome , videoId){
    this.nome = nome
    this.videoId = videoId
}


const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new

function novo(funcao, ...params){
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'bem vindo', 634)
const aula4 = novo(Aula, 'Até Breve', 234)
console.log(aula3, aula4)