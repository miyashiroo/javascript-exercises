const add = function(numberToSumOne, numberToSumTwo) {
  let add = numberToSumOne + numberToSumTwo
  return add
	
};

const subtract = function(numberOne, numberTwo) {
  let totalSubtract = numberOne - numberTwo
  return totalSubtract
};

const sum = function(...args) {
  const arrayOfSum = args[0]
  
  
  const arrayInNumbers = arrayOfSum.reduce(( acumulator, element) => acumulator + element, 0 )
  
  
  return arrayInNumbers

  /* let sumTotal = 0
	for (let i = 0; i < arrayInNumbers.length; i++) {
    sumTotal += arrayInNumbers[i] 
    console.log(sumTotal)
  }
  
  return sumTotal */
 /*  const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
  }; */

};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce((total,current) => total * current);




};

const power = function(number, toPower) { 
  let baseNumber = number
  const powerTo = toPower
  return baseNumber **= powerTo

	
};

const factorial = function(factorial) {
  let number = factorial
  let totalFactorial = 1
  for (let i = number ; i > 0; i--) {
    totalFactorial *= i

  }

  return totalFactorial




	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

factorial(5)