function compras( trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv55 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // se for diferente é true igual o xor
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv55, comprarTv32, manterSaudavel} //criou um objeto. objeto eh uma coleçao chave valor
    /* a linha acima é igual a: return { comprarSorvete: comprarSorvete, 
                                         comprarTv55: comprarTv55, 
                                         comprarTv32: comprarTv32, 
                                         manterSaudavel: manterSaudavel
                                        }*/
                                        }
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))