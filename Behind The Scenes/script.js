'use strict'

//defined in the global scope
function calcAge(birthYear) {
  //scoped to fxn
  const age = 2037 - birthYear; 
  
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
      //var is leaky and not scoped to the block, but to the fxn
      var millenial = true; 
      //same variable name, different scope
      const firstName = 'Steven'
      //scoped to the block -- let/const
      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str);

      //scoped to the block -- only true in strict mode
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT'

    }
    console.log(millenial);
    // console.log(add(2, 3))
    console.log(output);

  }
  printAge();
  return age; 
} 

//scoped globally
const firstName = 'Jonas';


calcAge(1991);

//Variable hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'
let job = 'teacher'
const year = 1991;

//hoisting w/fxns
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b; 
}

const addArrow = (a, b) => a + b;
