const reverseString = function(str) {
    let originalString = str;
    let lengthString = originalString.length -1 ;
    let reverseWord = '';

    for (let i = lengthString; i >= 0  ; i--) {
        reverseWord += originalString[i]
        
    }
    return reverseWord


};

module.exports = reverseString;
