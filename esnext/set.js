//não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times) //5 elementos ignorou a repetiçao do vasco

console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))

times.delete('Flamengo')

const nomes = ['Raquel', 'Rute', 'Ruan', 'Rasputia', 'Rute']
const nomesSet = new Set(nomes)

console.log(nomesSet)