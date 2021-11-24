
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

  
const middle = function(arrai) {
  let x = [];
  let midElmnt = []
  let mid;

  if (arrai.length === 2 || arrai.length === 1) {
     midElmnt = x.push()
    //break;

  } else if (arrai.length % 2 !== 0) {
    mid = Math.floor(arrai.length / 2)
    //console.log('mid:', mid)
    midElmnt = x.push(arrai[mid])

  } else if (arrai.length % 2 === 0) {
    mid = Math.floor(arrai.length / 2)
    let mid2 = mid - 1
    //console.log('mid2: ', mid2)
    //console.log('mid:', mid)
    midElmnt = x.push(arrai[mid2])
    midElmnt = x.push(arrai[mid])
  }
  
  return x;
};


//TEST
console.log('midarray: ', middle([5, 6]))
console.log('midarray: ', middle([1, 2, 4, 5, 6]))
console.log('midarray: ', middle([1, 2, 3, 4, 5, 6]))
//concole.log(assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])))
