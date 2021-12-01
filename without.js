const eqArrays = (array1, array2) =>
  array1.length === array2.length && 
  array1.every((v, i) => v === array2[i]);



const assertArraysEqual = function(actual, expected) {
  let pass = eqArrays(actual, expected)
  if (pass) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};

//let pass = eqArrays(actual, expected)

const without = function(source, iTemsToRemove) {
  let array1 = [];
  let array2 = [];
  let cnt = 0;
    
  for (cnt = 0; cnt < source.length; cnt++) {
      
    if (source.includes(iTemsToRemove[cnt]) ) {
        
      array1.push(iTemsToRemove[cnt])
        
    } if (!source.includes(iTemsToRemove[cnt]) ) {
        array2.push(source[cnt])
      }       
         
     
         
  }
  return array2
}; 

module.exports = without;






//TEST
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);