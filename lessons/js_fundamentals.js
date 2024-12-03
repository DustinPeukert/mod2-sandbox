/*
JS Fundamentals Lesson Scratchpad

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
console.log("js_fundamentals.js is running")


/*
JS Variables & Data Types Examples
*/ 

var firstName = 'Ben'; //string
var age = 26; //number
const isNice = true; //boolean

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
} //object

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi'] //array

let partnerName = null; //object
let jobTitle; //undefined

// console.log("favoriteFoods: ", favoriteFoods);
// console.log("partnerName: ", partnerName);
// console.log("jobTitle: ", jobTitle);
// console.log("policeSketchDescription: ", policeSketchDescription);
// console.log("hair: ", policeSketchDescription.hair);
// console.log("visiibleTattoos: ", policeSketchDescription.visibleTattoos);
// console.log("favoriteFood1: ", favoriteFoods[0]);
// console.log("favoriteFood3: ", favoriteFoods[3]);

// let quantity = 15;
// let mythicalCreature = "dragons";
// let creatureCount = quantity + " " + mythicalCreature;
// // 15 unicorns
// console.log("creatureCount:", creatureCount);

// let creatureCount2 = `${quantity} ${mythicalCreature}`;
// console.log("creatureCount2:", creatureCount2);

// function sayName() {
//   console.log("Dustin Peukert");
// }

// sayName();

// Write a function called “greetPerson” that takes in 2 arguments: a firstName and a lastName. 
// Then prints a greeting message that incorporates the full name.
// function greetPerson(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}!`);
// }

// greetPerson("Dustin", "Peukert");

// // Write an “addNumbers” function that takes in 4 different numbers as 4 different arguments, 
// // add them all up, and prints the total.
// function addNumbers(num1, num2, num3, num4) {
//   let total = num1 + num2 + num3 + num4;
//   console.log(total);
// }

// addNumbers(1, 2, 3, 4);

// // Write an “applyDiscount” function that takes in 2 arguments: a price and a discountAmount. 
// // Then prints the new sale price by subtracting the discount amount from the price.
// function applyDiscount(price, discountAmount) {
//   let newPrice = price - discountAmount;
//   console.log(newPrice);
// }

// applyDiscount(50, 27);


// function evaluateSleep(hoursOfSleep) {  
//   console.log(`This function is being called with: ${hoursOfSleep}`)
//   if (hoursOfSleep < 6) {
//     console.log('I am groggy.')
//   } else if (hoursOfSleep >= 6) {
//     console.log('I feel fantastic.')
//   }
// }

// evaluateSleep(8)
// evaluateSleep(4)

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// for (let i = 0; i < favoriteFoods.length; i++) {
//   console.log(`favoriteFood${i}:`, favoriteFoods[i]);
// }


// let fruits = ['apples', 'oranges', 'bananas'];

// function bragYourFruits() {
//   for (let i = 0; i < fruits.length; i++) {
//     console.log("I have some " + fruits[1]);
//   }
// }

// bragYourFruits();


// let kids = ['chris', 'heather', 'erica', 'rachel', 'becca'];

// function shoutForChildren() {
//   for (let i = 0; i < kids.length; i++) {
//     console.log(kids[i].toUpperCase());
//   }
// }

// shoutForChildren()


// let points = [7, 3, 0, 14];

// function calculateTotalPoints() {
//   let sum = 0;

//   for (let i = 0; i < points.length; i++) {
//     sum += points[i];
//   }

//   return sum;
//   // add code here to loop over the points array, adding up all the numbers as you go until you get the total sum
//   // return the total sum as the return value of the function
//   // Hint!  You'll probably need a variable to keep track of the running sum total as you add it all up
// }

// // console.log(calculateTotalPoints())

// function printTotalPoints() {
//   return `Your team scored ${calculateTotalPoints()} points!`;
// }

// console.log(printTotalPoints());
// expected output: "Your team scored 24 points!"





/* Notes:
Simple Data Types - BUNNS
Complex - objects, arrays

often will use bracket notation with a parameter to access
data in an object dynamically

there are 2 ways to acces data within an object in JS:
- dot notation = .something
- bracket notation = ["something"]

Concatenation and interpolation


*/



/*
JS Conditionals
*/ 

// function identifyCookie(cookie) {
//   if (cookie === "chocolate chip") {
//     console.log("This cookie is a chocolate chip cookie!");
//   } else if (cookie === "oatmeal raisin") {
//     console.log("This should not even be called a cookie :(");
//   } else {
//     console.log("I bet you wish you had a chocolate chip cookie");
//   }
// }

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")









