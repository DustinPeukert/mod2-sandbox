/* To run the code in this file, run the command:
      node js_party/more_functions_playground.js
*/

console.log("more_functions_playground.js is running")

//1. Make a function that takes in an object literal and logs a property of that object literal. Invoke the function once.
var cat = {
  name: "Gilbert",
  weight: "chumby",
}

function printCatProperties(cat) {
  console.log(`${cat.name} is ${cat.weight}`)
}

printCatProperties(cat)

//2. Make a function that takes in a number and returns the corresponding index value from the array below.
     //Create a variable that will hold the string "Mmm, I'm hungry for ______!" <- using an invocation of your function to fill in the blank with a food.
var foods = ['pizza', 'nachos', 'hot dogs', 'candy'];

function foodDecision(num) {
  console.log(`Mmm, I'm hungry for ${foods[num]}!`)
}

foodDecision(0);
foodDecision(2);

//3. Make a function called truth or dare that takes in one boolean parameter and returns a truth if the boolean is true and a dare if the boolean is false.
function truthOrDare(boolean) {
  if (boolean) {
    console.log('I want to get another snake.')
  } else {
    console.log('I dare you to rewrite this file in C#.')
  }
}

truthOrDare(true);
truthOrDare(false);

//4. Check out the rollADie function below which returns a whole number between 1 and whatever number you pass as the argument. Math.floor() is a built-in method that generates a random decimal.  Multiplying by 'num' and adding 1 ensures this random number is between 1 and the 'num' provided. Math.floor() ensures we get a whole number by rounding down to the nearest whole number. Uncomment the console logged invocation of rollADie and run it several times to see the randomly generate numbers.


function rollADie(num) {
  var randomNumber = Math.floor(Math.random() * num) + 1;
  
  return randomNumber
}

console.log(rollADie(6))


//5. Make a function called gambleOnSnakeEyes that creates two variables where each is assigned to an invocation of the rollADie function. If both variables are 1s, then return "You won, congratulations!". Otherwise return "No luck this time, try again!";
function gambleOnSnakeEyes() {
  let num1 = rollADie(6);
  let num2 = rollADie(6);

  if (num1 === 1 && num2 === 1) {
    console.log('You won, congratulations!');
  } else {
    console.log('No luck this time, try again!');
  }
}

gambleOnSnakeEyes();

// 6. Create a function called evaluateSalary which takes a parameter of an integer. If the parameter is above 100,000 - the function should return `This is a great salary!`. If the parameter is greater than 75,000 (but less than 100,000) - the function should return `This is a fair salary.` Anything less should return `Time to negotiate!`
function evaluateSalary(salary) {
  if (salary > 100000) {
    console.log('This is a great salary!');
  } else if (salary < 100000 && salary > 75000) {
    console.log('This is a fair salary.');
  } else {
    console.log('Time to negotiate!');
  }
}

evaluateSalary(125000);
evaluateSalary(76000);
evaluateSalary(50000);

// 7. Create a function called reassignCounter that takes three parameters, all numbers. Create a locally scoped variable called counter. The function should start by reassigning the variable counter to the first parameter. The newly reassigned counter should then be multiplied by the second parameter. Finally, the counter should be reduced by the third number and that counter should be returned.
function reassignCounter(num1, num2, num3) {
  let counter;
  counter = num1;
  counter *= num2;
  counter -= num3;

  return counter;
}

let counter = reassignCounter(4, 4, 4);
console.log(counter);

// 8. Create a function called performOps that takes three parameters, all integers - length, width, height. Within your function, create a variable called area that calculates the length x height. Create another variable called volume that calculates length x width x height. Log the volume and return the area. 
function performOps(length, width, height) {
  let area = length * width;
  let volume = length * width * height;
  console.log(volume);

  return area;
}

let area = performOps(3, 2, 3);
console.log(area);