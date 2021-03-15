let myAnimals = ["dog", "cat", "horse", "meerkat"]
let userAnimal = prompt("Enter an animal")
let loweredUserAnimal = userAnimal.toLowerCase();
myAnimals.push(loweredUserAnimal)

let reverseAnimals = myAnimals.reverse();
console.log(`The last animal is a/an ${reverseAnimals[0]}.`)