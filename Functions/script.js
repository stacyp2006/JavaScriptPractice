'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //default params are ES6
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 200); //how to skip a default param

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 247869584738,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH299';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 247869584738) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //higher order fxn
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//callbacks allow us to create abstraction
//allows us to hide detail of code implementation because we really don't care about all that detail
//allows us to think about problems at a higher, more abstract level

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//As an arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// //example of closure
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Stephen');

// greet('Hello')('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   code: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   code: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //book.(23, 'Sarah Williams'); Does not work

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 432, 'Stacy Potten');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   code: 'LX',
//   bookings: [],
// };

// book.call(swiss, 485, 'Martha Miller');

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData); //Does same as .apply()

// //Bind method: returns a new fxn where this keyword is bound
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');

// //With event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); //must have null as first arg if you don't care about this keyword
// //addVAT = value => value + value * 0.23;

// console.log(addVAT(100));

// //Challenge
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// //-----CODING CHALLENGE-----//
// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// //   1.1. Display a prompt window for the user to input the number of the
// //   selected option. The prompt should look like this: What is your favourite programming language?
// //     0: JavaScript
// //     1: Python
// //     2: Rust
// //     3: C++
// //     (Write option number)
// //   1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position   3   of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// // 2. Call this method whenever the user clicks the "Answerpoll" button.
// // 3. Create a method 'displayResults' which displays the poll results. The
// // method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// // 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     //Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //bonus
// poll.displayResults.call({ answers: [5, 2, 3] });

// IIFE - functions that are called and run only once
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23; //encapsulated in this function
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23; //still not accessible globally
  var notPrivate = 46; //accessible globally
}
