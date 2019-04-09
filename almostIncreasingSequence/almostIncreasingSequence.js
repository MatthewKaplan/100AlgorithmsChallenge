function almostIncreasingSequence(sequence) {
    /* So the way I went about this is I created a count variable and it stores the amount
  of times that numbers are out of sync. */

    let count = 0;

    /* So now I'm going to iterate though the sequence array using a .forEach()*/

    sequence.forEach((n, i) => {
      if (n >= sequence[i + 1]) {
        count++;
        return n;
      }
      return n;
    });
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 