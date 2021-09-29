const palindromes = function (string) {
    // split -> separate the words by spaces and
    // join -> take this words separeted by spaces and join into a single word. This is for takeout the spaces
    // replace with regular expressions returns a string without any special character. 

    let formatedWord = string.toLowerCase().split(" ").join("").replace(/[^a-zA-Z ]/g, "")
    const isPalindrome = formatedWord.split("")
    
    let reverseWord = ""
    
    for (let  i = isPalindrome.length - 1 ; i >= 0 ; i--) {
        reverseWord += isPalindrome[i]   
    }
    
    if (reverseWord === formatedWord) {
        return true
    } else {
        return false
    }
   

};

module.exports = palindromes;


palindromes("racecar")