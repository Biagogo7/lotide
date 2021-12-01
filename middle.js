

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

  
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
   
    midElmnt = x.push(arrai[mid2])
    midElmnt = x.push(arrai[mid])
  }
  
  return x;
};


module.exports = middle;

