'use strict'

//defined in the global scope
function calcAge(birthYear) {
  //scoped to fxn
  const age = 2037 - birthYear; 
  
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output);
  }
  printAge();
  return age; 
} 

//scoped globally
const firstName = 'Jonas';


calcAge(1991);
