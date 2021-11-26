
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


const takeUntil = function(array, callback) {
  // ...
  let result = [];

  for (let item of array) {

    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
    

    
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//assertArraysEqual((eqArrays((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2 ])), true);