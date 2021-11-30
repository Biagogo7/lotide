const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
//   }   else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}`);
//   }
// };


//TEST CODE - assertEqual
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1,12);
assertEqual('Light','Light');
assertEqual(1,'blue');
*/

const head = function(arrai) {
  let x = arrai[0];
  return x;
};


module.exports = head;



