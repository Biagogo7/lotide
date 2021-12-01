
const eqArrays = (array1, array2) => 
  array1.length === array2.length && 
  array1.every((v, i) => v === array2[i]);


module.exports = eqArrays;



  