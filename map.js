const eqArrays = (array1, array2) =>
array1.length === array2.length && 
array1.every((v, i) => v === array2[i]);

const assertArraysEqual = function(actual, expected) {
  let pass = eqArrays(actual, expected)
  if (pass) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }  else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};



const map = function(array, callback) {

const results = [];

for (let item of array) {
  // console.log('item BEFORE: ', item);
  // console.log('item AFTER: ', callback(item));
  // console.log('---');
  results.push(callback(item));
}

return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["going", "to", "higher", "places", "ade"];


const results1 = map(words2, word => word[0]);
console.log(results1);

