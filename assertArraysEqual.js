const eqArrays = (array1, array2) =>
  array1.length === array2.length && 
  array1.every((v, i) => v === array2[i]);



  const assertArraysEqual = function(actual, expected) {
    let pass = eqArrays(actual, expected)
    if (pass) {
      console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
    }   else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
    }
  };


  //TEST
  assertArraysEqual(["1", "2", "3"], ["1", "23", "3"]);