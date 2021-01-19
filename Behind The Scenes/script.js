// 'use strict';

// //defined in the global scope
// // function calcAge(birthYear) {
// //   //scoped to fxn
// //   const age = 2037 - birthYear;

// //   function printAge() {
// //     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       //var is leaky and not scoped to the block, but to the fxn
// //       var millenial = true;
// //       //same variable name, different scope
// //       const firstName = 'Steven';
// //       //scoped to the block -- let/const
// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);

// //       //scoped to the block -- only true in strict mode
// //       function add(a, b) {
// //         return a + b;
// //       }
// //       output = 'NEW OUTPUT';
// //     }
// //     console.log(millenial);
// //     // console.log(add(2, 3))
// //     console.log(output);
// //   }
// //   printAge();
// //   return age;
// // }

// //scoped globally
// const firstName = 'Jonas';

// // calcAge(1991);

// //Variable hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //hoisting w/fxns
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }
// //Let vs Const vs Var
// //let and const do not create properties on the window object, because they arent hoisted/in the tdz

// var x = 1;
// let y = 2;
// const z = 3;

// //conventions
// // Use let and const, not var
// // Declare variables at the top of each scope
// // Declare all fxns first, then use them after the declarations

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.group(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// // method borrowing
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// //"this" is undefined here because the function isn't owned anymore
// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //this arrow fxn inherits this keyword value from parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

//Returns undefined b/c arrow fxn doesn't get it's own this keyword
//this is currently scoped globally
jonas.greet();
jonas.calcAge();

//Might be a good idea to not use arrow functions as methods in objects

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
