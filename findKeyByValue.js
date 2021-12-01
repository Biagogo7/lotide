const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};


function findKeyByValue(object, value) {
 // return Object.keys(object).find(key => object[key] === value);
 for (var key in object) {
   if (object[key] === value) {
     return key;
   }
 }

};


module.exports = findKeyByValue;


//TEST


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);