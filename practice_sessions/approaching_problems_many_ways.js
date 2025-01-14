/*
JS Approaching Problems Many Ways Scratchpad

To run the code in this file, run the command:
  node practice_sessions/approaching_problems_many_ways.js
*/ 
console.log("approaching_problems_many_ways.js is running")


/*  PROMPT:
Write a function findCheapToys that returns an array of toy names that cost less than $20.

Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]
*/

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];

const eightiesToys = [
    {
      name: "Rubik's Cube",
      releaseYear: 1980,
      price: 9.99
    },
    {
      name: "Transformers",
      releaseYear: 1984,
      price: 19.99
    },
    {
      name: "My Little Pony",
      releaseYear: 1983,
      price: 12.99
    },
    {
      name: "Cabbage Patch Kids",
      releaseYear: 1982,
      price: 24.99
    },
    {
      name: "Nintendo Entertainment System",
      releaseYear: 1985,
      price: 89.99
    },
    {
      name: "He-Man and the Masters of the Universe",
      releaseYear: 1982,
      price: 14.99
    }
];

// Write a function findCheapToys that returns an array of toy names that cost less than $20.
// Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ] // for nineties toys
// Expected output => [ 'Rubik's Cube', 'Transformers', 'My Little Pony', 'He-Man and the Masters of the Universe' ]


/* Round 1: forEach
Solve the prompt using a forEach. You may not use any other iterator methods.
*/
// function findCheapToys(toysArray) {
//     let cheapToys = [];

//     toysArray.forEach((toy) => {
//         if (toy.price < 20) {
//             cheapToys.push(toy.name);
//         }
//     })
//     return cheapToys;
// }
// // 51 - define function name
// // 52 - create empty array to store data
// // 54 - iterate over original data using forEach
// // 55 - conditional to check toy price
// // 56 - if conditional is true, push object to our empty array
// // 59 - return our new array

// console.log('findCheap90sToys:', findCheapToys(ninetiesToys));
// console.log('findCheap80sToys:', findCheapToys(eightiesToys));

/* Round 2: filter and map
Solve the prompt using a filter and map. You may not use any other iterator methods.
*/
// function findCheapToys(toysArray) {
//     let cheapToys = toysArray.filter((toy) => {
//         return toy.price < 20;
//     })

//     cheapToys = cheapToys.map((toy) => {
//         return toy.name;
//     })
//     return cheapToys;
// }

// console.log('findCheap90sToys:', findCheapToys(ninetiesToys));
// console.log('findCheap80sToys:', findCheapToys(eightiesToys));

// // 73 - define function
// // 74 - define a variable that will save our filtered array
// // 75 - returns all toys with a price less than 20
// // 78 - map over our filtered array and reassign its value
// // 79 - return just the name of each toy
// // 81 - return our mapped array


/* Round 3: reduce
Solve the prompt using a reduce. You may not use any other iterator methods.
*/
// function findCheapToys(toysArray) {
//     let cheapToys = toysArray.reduce((acc, toy) => {
//         if (toy.price < 20) {
//             acc.push(toy.name);
//         }
//         return acc;
//     }, [])
//     return cheapToys;
// }

// console.log('findCheap90sToys:', findCheapToys(ninetiesToys));
// console.log('findCheap80sToys:', findCheapToys(eightiesToys));

// // 97 - define function
// // 98 - create an array to store our reduce return
// // 98/103 - iterate over reduce that has an acc default value of []
// // 99 - conditional to check price
// // 100 - if conditional is true push the toy name into our acc
// // 102 - return accumulator
// // 104 - return our newly reduced array