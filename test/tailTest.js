const assertEqual = require('../assertEqual');

const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!




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


