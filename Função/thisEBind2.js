function Pessoa(){
    this.idade = 0
    
    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //temporizador a cada1000 milisegundos
}

new Pessoa //instanciar , criar um objeto
