'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; // reserved for future use

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2)

// function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// yearsUntilRetirement(1991);
// console.log(yearsUntilRetirement(1991, 'Jonas'))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1951, 'Mike'));

// Given an array of numbers that contains duplicates
// I want to return a new array with the unique values of the original
// new Set
// const newArray = [...newSet(origArr)]
// const numArray = [6, 4, 1, 2, 4, 6, 3, 4];

// const findUniqueValues = (arr) => {
//     const uniqueValues = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(!uniqueValues.includes(arr[i])) {
//             uniqueValues.push(arr[i])
//         }
//     }
//     return uniqueValues;
// }

//Exercise
//function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3)

// const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Peter', 'Steven'];
// const newLength = friends.push('Jay');
// console.log(friends)
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop();
// console.log(popped)
// console.log(friends);

// friends.shift();
// console.log(friends)

// console.log(friends.indexOf('Steven'))

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// //includes uses strict equality

// if (friends.includes('Peter')) {
//     console.log('You have a friend named Peter')
// }

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.')

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends.')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman'

// console.log(jonas)

//Challenge
//"Jonas has three friends, and his best friend is called Michael"

// const challenge = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// console.log(challenge)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(jonas.calcAge())
// console.log(jonas.age);
// console.log(jonas.getSummary())

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     types.push(typeof jonas[i]);
//     // types[i] = typeof jonas[i];
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }

// console.log(ages);

// //continue and break
// console.log('-- ONLY STRINGS --')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('-- BREAK W/NUMBER --')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = jonas.length - 1; i >= 0 ; i--) {
//     console.log(i, jonas[i])
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//     }
// }

// console.log("stacy");
