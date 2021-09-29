const fibonacci = function(fibonacciPosition) {
    const position = Number(fibonacciPosition)
    let firstFibonacci = 1
    let secondFibonacci = 1
    let fibo = 0

    if( position < 0 ) { 
        return "OOPS"
    } else if (position === 1 || position === 2){
        return (1)

    }


    // i = 2 because the first and the second fibonacci number is already given.     
    for( let i = 2; position > i ; i++) {
        fibo = firstFibonacci + secondFibonacci
        firstFibonacci = fibo - firstFibonacci
        secondFibonacci = fibo


    }
    return fibo




};

module.exports = fibonacci;

console.log(fibonacci(4))