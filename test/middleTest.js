
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5] for [4, 5, 6]", () => {
    assert.deepEqual(middle([4, 5, 6]), [5]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });

  it("returns [4] for [1, 2, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 4, 5, 6]), [4]); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});








/*



const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual'); 

//TEST
console.log('midarray: ', middle([5, 6]))
console.log('midarray: ', middle([1, 2, 4, 5, 6]))
console.log('midarray: ', middle([1, 2, 3, 4, 5, 6]))
//concole.log(assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])))


*/