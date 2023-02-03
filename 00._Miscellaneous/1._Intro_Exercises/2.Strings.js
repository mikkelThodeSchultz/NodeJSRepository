// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result1 = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(result1)
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
const result2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
console.log(result2.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const sum = (one + two + three)
const result3 = sum / 3
console.log(result3.toFixed(5))



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letterC = letters.charAt(2)
console.log(letterC)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const theJinFact = fact.indexOf('j')
const firstPart = fact.slice(0,theJinFact)
const theJ = fact.slice(theJinFact,theJinFact+1).toUpperCase();
const theLastPart = fact.slice(theJinFact+1,fact.length)
console.log(firstPart + theJ + theLastPart)


// --------------------------------------
