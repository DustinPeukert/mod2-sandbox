/*
Ironman - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/ironman.js
*/ 
console.log("ironman.js is running")


const ironmanData = {
  swim: [
    { name: "John Doe", age: 34, time: 55, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 50, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 62, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 58, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 54, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 60, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 57, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 52, triclub: "Iron Eagles" }
  ],
  bike: [
    { name: "John Doe", age: 34, time: 300, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 290, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 320, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 310, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 295, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 315, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 305, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 285, triclub: "Iron Eagles" }
  ],
  run: [
    { name: "John Doe", age: 34, time: 210, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 200, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 230, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 215, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 205, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 225, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 210, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 198, triclub: "Iron Eagles" }
  ]
};

/* Level 1

Write a function that takes in an event and returns the average time for that event across all athletes.

*Average is calculated by adding up all the times then dividing by the total number of times that were added.

*Don't worry about rounding numbers.

calculateAverage('swim')  ---> 56
calculateAverage('run')  ---> 211.6
calculateAverage('bike')  ---> 302.5

Start with:
- What part(s) of the data do I need to access?  How will I access it? 
- What are the steps that I need to take to achieve this larger goal?

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/

// define function calculateAverage(takes an event as a param: ex = 'swim')
//   variable = iterates over the given event in the ironmanData object (likely using reduce)
//     grabs the :time value of the current object
//     adds it to a variable that is keeping track of the total time
//     iteration should return our variable tracking total time
//   end of iteration/default value for acc = (0)

//   variable = count of objects in given event

//   new variable = total time divided by count of objects
//   return average
// end of function

// call function using console log

// function calculateAverage(eventName) {
//   let totalTime = ironmanData[eventName].reduce((acc, athlete) => {
//     let athleteTime = athlete.time;
//     acc += athleteTime;
//     return acc;
//   }, 0)

//   let numOfAthletes = ironmanData[eventName].length;
//   let averageTime = totalTime / numOfAthletes;
//   return averageTime;
// }

// console.log('calculateAverage:', calculateAverage('swim'));

/* Level 2

Modify your function so that it takes in an age in addition to the event and now only returns the average time for that event for athletes of that age.

calculateAverage('swim', 29)  ---> 52
calculateAverage('swim', 34)  ---> 55
calculateAverage('swim', 41)  ---> 62

Start with:
- What part(s) of the data do I need to access?  How will I access it?
  - Has this changed from part 1?
- What are the steps that I need to take to achieve this larger goal?
  - Do I need to change the logic in part one?  Or is there just an additional step(s) to add.  Where/when do I include that added step?
- HINT:  Do not try to shove more logic within your existing iteration.  Instead, identify and separate step that you can implement then refactor slightly to use what you're already written.

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/

// define function/takes event name and age as parameters
  // variable = iterates over specific event data using reduce
    // if athlete age is equal to age param
      // athleteTime = athlete.time
      // acc += athleteTime
      // return acc
    // else
      // return acc
    // end
  // end of iteration

  // variable = iterate over event data using reduce
    // if athleteage == age
      // acc ++
      // return acc
    // else
      // return acc
    // end
    // return acc
  // end of iteration/default value of 0
  // average = total time divided by number of athletes
  // return average
// end of function

// console log function call

// function calculateAverage(eventName, age) {
//   let totalTime = ironmanData[eventName].reduce((acc, athlete) => {
//     if (athlete.age === age) {
//       let athleteTime = athlete.time;
//       acc += athleteTime;
//       return acc;
//     } else {
//       return acc;
//     }
//   }, 0)
//   let numofAthletes = ironmanData[eventName].reduce((acc, athlete) => {
//     if (athlete.age === age) {
//       acc++;
//       return acc;
//     } else {
//       return acc;
//     }
//   }, 0)
//   let average = totalTime / numofAthletes;
//   return average;
// }

// console.log('calculateAverage:', calculateAverage('swim', 29));

// Dry Refactor:
function calculateAverage(eventName, age) {
  let totalTime = 0;
  let numOfAthletes = 0;

  ironmanData[eventName].forEach((athlete) => {
    if (athlete.age === age) {
      totalTime += athlete.time;
      numOfAthletes++;
    }
  });

  let average = totalTime / numOfAthletes;
  return average;
}

console.log('calculateAverage:', calculateAverage('swim', 29));