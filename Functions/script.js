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

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book.(23, 'Sarah Williams'); Does not work

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 432, 'Stacy Potten');

const swiss = {
  airline: 'Swiss Air Lines',
  code: 'LX',
  bookings: [],
};

book.call(swiss, 485, 'Martha Miller');

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData); //Does same as .apply()
