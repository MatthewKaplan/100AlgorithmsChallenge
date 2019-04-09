function allLongestStrings(inputArray: string[]): string[] {

  /* So first we have to find out what the longest length of the largest 
   string is */

  let longestLength = 0;
  const longestWords = [];

  /* Now I'm going to iterate through the array being passed through the function
  using the .forEach() iterator prototype method */
  /* In the .forEach() we want to compare the length of the word to our longestLength,
  which I will do so by using a ternary, is longestLength less than our word length,
  if it is, return word length, is it isn't return longestLength and set it back equal
  to itself */

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  /* And now we need to return the longestWords. How I'm going to do that is iterate
  one more time though the inputArray, again using .forEach() */

  /* In the .forEach() we will have a if statement with a condition that if word.length
  is strictly equal to longestLength, were going to push that word into our longestWords
  array */

  inputArray.forEach((word: string) => {
    if(word.length === longestLength) {
      longestWords.push(word);
    }
  });


  return longestWords; 
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

// Expected output: ['aba', 'vcd', 'aba']