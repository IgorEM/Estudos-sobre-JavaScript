//es ECMAScript eh uma especificaçao que o java script segue
{
    var a =3
    let b = 8
}

console.log(a) //var nao tem escopo
//console.log(b) // let tem escopo, nesse caso da undefined

//---------------------------------------------------------------------

//Template String

const produto = 'Dinossauro'
console.log(`${produto} é topper`)

//Destructuring

const [x, y, ...vetor] = "Onitorrinolaringologista"
console.log(x, y, vetor)

const [h, b] = [1, 2, 3]
console.log(h, b) 

const {idade: i, nome: n} = { nome: 'Ana', idade: '15'} //destructuring tirando os valores de um objeto armazenando em duas constantes
console.log(i, n) 