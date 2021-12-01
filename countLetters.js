const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}` );
  }   else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual}  !==  ${expected}` );
  }
};


const countLetters = function (sntnc) {
  let char = sntnc.split(" ");
  let sentence =char.join("");

  let letterCount = {};

  for (const alphabet of sentence) {

    if (sentence[alphabet] !== ' ') {

    } if (letterCount[alphabet]) {
        letterCount[alphabet] += 1
    } else {
        letterCount[alphabet] = 1
      }

  }

 return letterCount;

};

module.exports = countLetters;






//TEST

console.log(countLetters('This is the day that the Lord has made'));
console.log(countLetters('this is a great day to learning coding'));