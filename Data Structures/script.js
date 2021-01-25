'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  //ES6 enhanced obj literals: no need for function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//property Values
const values = Object.values(openingHours);
console.log(values);

//Entries (names + values)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining
// console.log(restaurant.openingHours.mon?.open); //testing for openingHours and Monday
// console.log(restaurant.openingHours?.mon?.open);

//Example of optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
//}

//Methods and optional chaining
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

//Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty'); //more concise than...
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array is empty'); //line 72 does the same thing as lines 73-74

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//to get item
// for (const item of menu) console.log(item);

//to get item and index
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });
// const { categories, name, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables in an object
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , second] = restaurant.categories; //space skips an element
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//The Spread Operator
//Acts similar to destructuring. Difference: takes all elements, doesn't create new variables. Can only use it in places where we would otherwise write values separated by commas

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newGoodArr = [1, 2, ...arr]; //expands the array into all of its individual elements
// console.log(newGoodArr);

// console.log(...newGoodArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

//Copy array --  creates shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//Iterables are arrays, strings, maps and sets but not objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

//Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// The Rest Pattern
// const arr1 = [1, 2, ...[3, 4]]; // Spread because on right side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5]; //Rest because on left side of =
// console.log(a, b, others);

// rest pattern must be last element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 6, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// console.log('-----OR------');
//use, return any data type and can short circuit
//returns the first value as long as it is truthy, doesn't even eval the other value
// console.log(3 || 'Jonas'); //3
// console.log('' || 'Jonas'); //'Jonas'
// console.log(true || 0); //true
// console.log(undefined || null); //null, also falsy but prints anyway

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello, b/c it is the first truthy value, short circuits the ones after

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------AND------');
// && operator short circuits when the first value is falsy and returns that falsy value
// console.log(0 && 'Jonas'); //returns 0
// console.log(7 && 'Jonas'); //returns Jonas, when first value is truthy, second value gets evaluated and returned

// console.log('Hello' && 23 && null && 'jonas'); //returns null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Nullish coalescing Operator ??
//Works on the concept of nullish values: null and undefined(NOT 0 or '', these are considered truthy with ??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //returns 10

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect); //returns 0

//CODING CHALLENGE
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team(variables'players1'and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams(22 players)
// 4. During the game, Bayern Munich(team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
// 6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win.Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
