class Lancamento { //lancamento é um acrescimo ou debito, conta de luz, recebimento do salario
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor   
    }
}

class CicloFinanceiro {

    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] // iniciando um array de lançamentos
    }

    //dentro da classe CicloFinanceiro
    
    addLancamentos (...lancamentos) /* ...lancamentos a 
    notação (...) sig que recebe mais de um parametro  */ 
    {
        lancamentos.forEach(i => this.lancamentos.push(i)) //percorrendo e dando push 
        //é o lancamentos do construtor de Ciclo financeiro

    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(i =>
            {
            valorConsolidado += i.valor
        })
        return valorConsolidado
    }
} //fechando a class CicloFinanceiro aqui

const salario = new Lancamento('salario', 2456)
const aluguel = new Lancamento('Aluguel', -650)


const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, aluguel)
console.log(contas.sumario())
