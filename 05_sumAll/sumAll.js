const sumAll = function(number1, number2) {
    let sum = 0 
    let num1 = number1
    let num2 = number2

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
        
    } 
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {

        return "ERROR"

    }
    
    if( num1 > num2){
        const temp = num1
        num1 = num2
        num2 = temp
    }

    for (let i = num1; i <= num2; i++){
        sum += i  
        
    }

    return sum


};

console.log(sumAll(3,6))
module.exports = sumAll;
