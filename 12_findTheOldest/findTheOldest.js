const findTheOldest = function(people) {
    return people.reduce((oldest , currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        console.log(oldestAge)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        console.log(currentAge)
        return oldestAge < currentAge ? currentPerson : oldest
    })
   
};


const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}




module.exports = findTheOldest;
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))