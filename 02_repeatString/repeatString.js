const repeatString = function(string, num) {
    let word = string
    let number = num
    
    let multipliedString = "";

    if (number < 0 ) {
        return multipliedString = "ERROR"
    }

    for (let i = 0; i < number;i++) {


        multipliedString += word
        


    }
return multipliedString


};
module.exports = repeatString;
