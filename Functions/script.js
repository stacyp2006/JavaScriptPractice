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

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247869584738,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH234';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 247869584738) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
