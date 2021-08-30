/* const removeFromArray = function(array, elementToRemove) {
  const principalArray = array
  const removeFromArray = elementToRemove
  const lengthPrincipalArray = principalArray.length
  const index = principalArray.indexOf(removeFromArray)
  
  const newArray = principalArray.splice(index,1)

  
  return principalArray
};

console.log(removeFromArray([3,2,1,4], 3))
module.exports = removeFromArray; */

const removeFromArray = function(...arrayAndArguments) {
  let args = Array.from(arguments) // transforma os arguments para array. Ps: arguments direto não é um array. só tem a função lenght, mas não é um array.
  let arrayOfArguments = args[0]
  console.log(arrayOfArguments)
  console.log(args)
  args.splice(0,1)
  let argumentsToRemove = args
  console.log(argumentsToRemove)
  let filteredArray =  arrayOfArguments.filter(val => !argumentsToRemove.includes(val)) // Usa o filter no arrayOfarguments(que é o array para verificar) e verifica se
  // o valor do argumentsToRemove é igual ao arrayfArguments se for igual ele não inclui, se for diferente ele inclui. Assim ele verifica um por um quais são os que irão
  // pra nova array e que são iguais ao argumentos passados para remover. Retornando assim a resposta do exercicio. 
  return filteredArray

};


removeFromArray([3,2,4,1,3], 3,2)
module.exports = removeFromArray;




