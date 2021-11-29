
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
  
  // // logic to update results here
  // let k = [];
  // let char;

  // char = sentence.split(" ");
  // let newSentence = char.join("");

  // unique = [...new Set(newSentence)];
  // console.log(unique);

  // for (let i = 0; i < newSentence.length; i++) {
    
  //   // for (let j = 0; j < newSentence.length; j++) {
     

  //     if (unique.includes(newSentence[i])) {

  //       //if (newSentence[i] === newSentence[j]) {
  //       if (results[newSentence[i]] !== []) {
  //         //results[newSentence[i]] = k.push(i)
  //       } 
  //         results[newSentence[i]] = i;
  //       //console.log(k)
  //       //results[newSentence[j]] = k;

  //     }  
  
        
    
  // } 
  console.log(results);
  return results;
};

// let y;
// y = letterPositions('hello');

// console.log(y);
//TEST
assertArraysEqual(letterPositions("hello").e, [1]);