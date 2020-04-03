const sequencia ={

    _valor: 1, // convenção, pra dizer que eh privada entre os prog
    
    get valor() { return this._valor++},

    set valor(valor){
        
        if(valor > this._valor)
        {
            this._valor = valor
        }
    
                    }

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 23 //ignorou
console.log(sequencia.valor, sequencia.valor)