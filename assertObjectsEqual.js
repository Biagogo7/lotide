
const eqObjects = function(object1, object2) {

let arrai1 = Object.keys(object1)
let arrai2 = Object.keys(object2)
  
// console.log('arrai1: ', arrai1);
// console.log('arrai2: ', arrai2);
  
//assertEqual(eqArrays(arrai1, arrai2), true);
  
    
  if (arrai1.length !== arrai2.length) {  
         
    //console.log(`🛑🛑🛑Assertion Failed: ${object1}  !==  ${object2}` );
    return false;
  }
  
  for (let item of arrai1) {
      
    if (object1[item] !== object2[item]) {
                   
      return false;
        
    }
  } 
  //console.log(`✅✅✅Assertion Passed: ${object1}  ===  ${object2}` );
  return true;
  
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // format the output of the assertion when object is displayed
 
  let pass = eqObjects(actual, expected)
  if (pass) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }

};

//console.log(`Example label: ${inspect(actual)}`);

const ca = { a: "1", b: "2" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const da = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


assertObjectsEqual(eqObjects(ab,ba), true);
assertObjectsEqual(eqObjects(da,abc), false);



  
  