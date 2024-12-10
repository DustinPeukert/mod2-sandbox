/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
console.log("array_prototype_methods.js is running")

// array prototype methods must RETURN something specific in order to work
// keep writing your functions how you always have, BUT
// in your iterator methods use arrow syntax

// filter gives us a copy of the original array, but
// only containing elements we wanted
// filter gives us exact original elements, unmodified
// filter has the if statement BUILT IN, so just put condition in return

const names = ['nick', 'ben', 'trisha', 'john', 'dustin'];

function findNames() {
  const filteredNames = names.filter((name) => {
    // console.log('name:', name);
    // console.log('# of letters:', name.length);
    return name.length <= 4;
  })
  return filteredNames;
}

console.log('filteredNames:', findNames());


var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

var livingBeatles = beatles.filter((beatle) => {
  return beatle.living;
})

var livingBeatleNames = livingBeatles.map((livingBeatle) => {
  return livingBeatle.name;
})

console.log('livingBeatles:', livingBeatles);
console.log('livingBeatleNames:', livingBeatleNames);


// map will always give a new array thats the same length as your original
// use when you want to modify each element
// you will return whatever new value you want to have in the new array
// you can have multiple returns based on conditionals

const prices = [4.99, 5.50, 7.00, 10.25];

var increasedPrices = prices.map((price) => {
  return price += 1;
})

console.log('increasedPrices:', increasedPrices);


const degreesF = [67, 32, 55, 102];

var degreesC = degreesF.map((degreeF) => {
  return (degreeF - 32) * (5/9);
})

console.log('degreesC:', degreesC);


// reduce lets us iterate over an array one element at a time
// has a built in var (accumulator), that we use to compile our answer
// accumulator is first, your variable is second
// you must return the accumulator or reduce won't work
// must declare initial value of reduce (0, [], {}, etc.)
// reduce can return any data type
const numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce((acc, number) => {
  acc += number;
  return acc;
}, 0)

console.log('sum:', sum);


const adjectives = ['fantastic', 'amazing', 'childish'];

var result = adjectives.reduce((acc, adjective) => {
  acc[adjective] = adjective.length;
  return acc;
}, {})

console.log('result:', result);


// forEach does not return anything
const prices2 = [4.99, 5.50, 7.00, 10.25];
const increasedPrices2 = [];

prices2.forEach((price) => {
  let updatedPrice = price + 1;
  increasedPrices2.push(updatedPrice);
})

console.log(increasedPrices2);


const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

dogs.forEach((dog) => {
  console.log(`${dog.name} has ${dog.numLegs} legs.`);
})


// sort is not intuitive :(
// use parameters of a and b
// determine which order:
// a - b is smallest to largest
// b - a is largest to smallest
const numbers2 = [15, 6, 14, 2, 22, 9, 45];

numbers2.sort((a, b) => {
  return b - a;
})

console.log(numbers2);


const cities = [
  { name: 'New York', population: 8398748, country: 'United States' },
  { name: 'Tokyo', population: 37393000, country: 'Japan' },
  { name: 'London', population: 8908081, country: 'United Kingdom' },
  { name: 'Mumbai', population: 12478447, country: 'India' }
];

cities.sort((a, b) => {
  return b.population - a.population;
})

console.log(cities);

// common errors:

// TypeError: Cannot read properties of undefined (reading 'map')
// Translation: trying to read map, but the thing before it is undefined

// ReferenceError: acc is not defined
// Translation: this variable does not exist in the location you're calling it
// could mean scope error or typos