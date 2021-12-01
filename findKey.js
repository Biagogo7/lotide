const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};


// function findKeyByValue(object, value ) {
//   // return Object.keys(object).find(key => object[key] === value);
//   for (var key in object) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
 
//  };

const findKey = function (object, callback) {
 

   for (var key in object) {
    let objectValue = object[key]
    //console.log(objectValue)
    if (callback(objectValue)) {
      return key;
    }
    
    } 
  
    
};



 
//TEST




assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma")


