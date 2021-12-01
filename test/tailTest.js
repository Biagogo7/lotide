
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [5, 6] for [4, 5, 6]", () => {
    assert.deepEqual(tail([4, 5, 6]), [5, 6]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

});















/*
const assertEqual = require('../assertEqual');

const tail = require('../tail');


      // Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

*/


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
//   }   else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
//   }
// };


//TEST CODE - assertEqual

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(1,12);
// assertEqual('Light','Light');
// assertEqual(1,'blue');


