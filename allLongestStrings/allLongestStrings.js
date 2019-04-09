function allLongestStrings(inputArray) {

  // So first we have to find the longest word length in the inputArray

  let stringLength = 0;
  const longestStringsArr = [];

  // We will do this using .forEach() to iterate over the inputArray

  inputArray.forEach(word => {
    stringLength = stringLength < word.length ? word.length : stringLength
  })

  /* Now we have to return the longest words in the inputArray by iterating over 
  the array again using a forEach and comparing each element to the stringLength */
  
  inputArray.forEach(word => {
    if(stringLength === word.length) {
      longestStringsArr.push(word);
    }
  })

  return longestStringsArr;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));