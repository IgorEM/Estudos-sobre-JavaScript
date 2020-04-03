//operador ...rest(juntar)/spread(espalhar)
//usar rest com parametro de funçao

//usar spread com objeto
const funcionario = { nome: 'Igor', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const gruproA = ['João', 'Pedro', 'Gloria Menezes']
const grupoFinal = ['Maria', ...gruproA, 'Josefina']
console.log(grupoFinal)