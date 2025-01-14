/*
Double Dare - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/double_dare.js
*/ 
console.log("double_dare.js is running")

const cakes = [
  {
    type: 'dark chocolate',
    feature: 'dark chocolate ganache',
    toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    inStock: 15
  },
  {
    type: 'yellow',
    feature: 'chantilly cream',
    toppings: ['berries', 'edible flowers'],
    inStock: 14
  },
  {
    type: 'white chiffon',
    feature: 'whipped sweet cream',
    toppings: ['mint', 'cranberry', 'edible flowers'],
    inStock: 0
  },
  {
    type: 'butter rum',
    feature: 'spiced rum glaze',
    toppings: ['crystallized ginger', 'toasted sugar'],
    inStock: 9
  },
  {
    type: 'vanilla',
    feature: 'whipped cream',
    toppings: ['smoked sea salt', 'crystallized ginger', 'berries'],
    inStock: 21
  },
  {
    type: 'honey',
    feature: 'chocolate buttercream',
    toppings: ['smoked sea salt', 'toasted sugar'],
    inStock: 0
  }
];

/* 
Level 1
Write a function that returns an array of all unique toppings (no duplicates) needed to bake every cake in the dataset 

findToppings()  --> should return
['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

Start with:
- What part(s) of the data do I need to access?  How will I access it?
  - Has this changed from part 1?
- What are the steps that I need to take to achieve this larger goal?
  - Do I need to change the logic in part one?  Or is there just an additional step(s) to add.  Where/when do I include that added step?

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
- Think through the code you're writing iteration by iteration. What data is it looking at each iteration, what do you want to do while it's look at that piece of data?
*/

// define function/no arguments
  // create new array for unique toppings

  // iterate over the array using foreach
    // if our array does not include topping in the current object
      // add the topping
    // end
  // end of iteration/default 

  // return our unique toppings array
// end of function

function findToppings() {
  let uniqueToppings = [];

  cakes.forEach((cake) => {
    cake_toppings = cake.toppings;

    cake_toppings.forEach((topping) => {
      if (!uniqueToppings.includes(topping)) {
        uniqueToppings.push(topping);
      }
    })
  })

  return uniqueToppings;
}

console.log('findToppings:', findToppings());


/* 
Level 2

Refactor your function so that it takes in the cakes dataset as an argument. Invoke your function with the cakes dataset and then again with the pizza dataset below to ensure it works with both.

findToppings(cakes)  --> should return
['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ...etc]

findToppings(pizzas)  --> should return
['italian sausage', 'pepperoni', 'mozzarella', 'onions', 'peppers', ...etc]
*/

/*
define a function that takes an array as an argument
  
end of function
*/

const pizzas = [
  {
    type: 'chicago style',
    feature: 'deep dish',
    toppings: ['italian sausage', 'pepperoni', 'mozzarella'],
    inStock: 15
  },
  {
    type: 'detroit style',
    feature: 'pan pizza crust',
    toppings: ['pepperoni', 'onions', 'peppers', 'black olives', 'mozzarella'],
    inStock: 14
  },
  {
    type: 'new york style',
    feature: 'whipped sweet cream',
    toppings: ['mozzarella', 'anchovies', 'pepperoni'],
    inStock: 0
  }
]


/* 
Level 3

Without changing your function, figure out how to invoke your function and pass through the cakes array and then again passing the pizza array from the foodData dataset below (not from the arrays above). Ensure both return the expected results from level 1 and 2.

*/

const foodData = {
  cakes: [
    {
      type: 'dark chocolate',
      feature: 'dark chocolate ganache',
      toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
      inStock: 15
    },
    {
      type: 'yellow',
      feature: 'chantilly cream',
      toppings: ['berries', 'edible flowers'],
      inStock: 14
    },
    {
      type: 'white chiffon',
      feature: 'whipped sweet cream',
      toppings: ['mint', 'cranberry', 'edible flowers'],
      inStock: 0
    },
    {
      type: 'butter rum',
      feature: 'spiced rum glaze',
      toppings: ['crystallized ginger', 'toasted sugar'],
      inStock: 9
    },
    {
      type: 'vanilla',
      feature: 'whipped cream',
      toppings: ['smoked sea salt', 'crystallized ginger', 'berries'],
      inStock: 21
    },
    {
      type: 'honey',
      feature: 'chocolate buttercream',
      toppings: ['smoked sea salt', 'toasted sugar'],
      inStock: 0
    }
  ],
  pizzas: [
    {
      type: 'chicago style',
      feature: 'deep dish',
      toppings: ['italian sausage', 'pepperoni', 'mozzarella'],
      inStock: 15
    },
    {
      type: 'detroit style',
      feature: 'pan pizza crust',
      toppings: ['pepperoni', 'onions', 'peppers', 'black olives', 'mozzarella'],
      inStock: 14
    },
    {
      type: 'new york style',
      feature: 'whipped sweet cream',
      toppings: ['mozzarella', 'anchovies', 'pepperoni'],
      inStock: 0
    }
  ]
}

/* 
Level 4

Now, refactor your function so that it takes in either a string of "cakes" or a string of "pizzas" as the argument and pulls that data from the foodData dataset.

Invoke it both ways to ensure both return the same expected results from level 1 and 2.

findToppings("cakes")  --> should return
['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ...etc]

findToppings("pizzas")  --> should return
['italian sausage', 'pepperoni', 'mozzarella', 'onions', 'peppers', ...etc]

*/