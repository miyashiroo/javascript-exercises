//Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) 
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// resolução pela resposta do odin: 
/* const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
  };
  
  module.exports = leapYears; */
const leapYears = function(leapYear) {
    const yearAnalised = leapYear
    if ( yearAnalised % 100 === 0 && yearAnalised % 400 === 0 && yearAnalised % 4 ===  0  ) {
        return true
    }

    if ( yearAnalised % 100 === 0 && yearAnalised % 400 !== 0  ) {
        return false
    }



    if ( yearAnalised % 4 === 0 ){ 
        return true
    }

   return false



};

console.log(leapYears(1600))
module.exports = leapYears;
