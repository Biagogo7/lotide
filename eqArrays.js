const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};

const eqArrays = (array1, array2) =>
  array1.length === array2.length && 
  array1.every((v, i) => v === array2[i]);
 


  //TEST
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
  