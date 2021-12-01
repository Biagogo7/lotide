
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



const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    console.log('i',i)
    let item = sentence[i];
    console.log('item:',item)
     if (!results[item]) {
      // results[item] = [i]
       console.log('results[item]',results[item] = [i])

     } else {
       results[item].push(i)
     }
     
  }



  console.log(results);
  return results;
};



module.exports = letterPositions;


// let y;
// y = letterPositions('hello');

// console.log(y);
//TEST
assertArraysEqual(letterPositions("hello").e, [1]);