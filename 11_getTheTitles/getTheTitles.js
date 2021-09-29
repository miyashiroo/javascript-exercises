const getTheTitles = function(array) {
    let titlesToReturn = []
    array.forEach(valorAtual => {
        titlesToReturn.push(valorAtual.title)
    })
    console.log(titlesToReturn)
    return titlesToReturn
};

module.exports = getTheTitles;
