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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

let arrai1 = Object.keys(object1)
let arrai2 = Object.keys(object2)

console.log('arrai1: ', arrai1);
console.log('arrai2: ', arrai2);

assertEqual(eqArrays(arrai1, arrai2), true);

  
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




//TEST



const ca = { a: "1", b: "2" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const da = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


//assertEqual(eqObjects(ab,ba), true);
//assertEqual(eqObjects(da,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(cd,dc);
// assertEqual(cd,cd2);

