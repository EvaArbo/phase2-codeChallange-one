// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(addFive);
function addFive(num){
  return num + 5;
}
console.log(numbersAddFive)
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 


// 2 - uncomment the lines that start with "const" and "console.log"
const numbersReformatted = numbers.map(format)
function format(num){
  return num.toString() + `: `
}
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
console.log(numbersReformatted);


// 3
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(remove);
function remove(name){
  if (name.endsWith('s')){
    return name.slice(0, -1);
  }
}
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);


// 4:
const firstLetters = words.map(firstL)
function firstL(word){
  return word[0]
}
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);


// Bonus:
const capitalizedWords = words.map(captaLize)
function captaLize(name){
  return name[0].toUpperCase() + name.slice(1);
}
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);
