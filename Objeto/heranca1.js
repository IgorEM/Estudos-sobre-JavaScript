const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // é vazio mas existe e esta presente
console.log(ferrari.__proto__ === Object.prototype) //o prototipo de ferrari representa o prototype de alto nivel depois dele tem mais nada
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // nao tem prototype pq eh o mais alto na hierarquia
// toda funçao tem .prototype
//o objeto em JS tem uma referencia para o seu prototipo eh assim que eh definido herança em java script, a partir 
//da referencia pra um prototipo vc tem uma referencia para um outro objeto e esse objeto tem atributos e 
//comportamentos que podem ser accessados para o obj filho
//vc pode colocar um atributo que nao existe no filho dai ele procupa no pai, no pai do pai

function MeuObjeto(){} 
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)