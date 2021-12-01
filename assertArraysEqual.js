const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  let pass = eqArrays(actual, expected)
  if (pass) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};


module.exports = assertArraysEqual;

//TEST
assertArraysEqual(["1", "2", "3"], ["1", "23", "3"]);