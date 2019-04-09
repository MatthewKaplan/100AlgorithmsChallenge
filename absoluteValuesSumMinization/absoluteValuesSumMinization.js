function absoluteValuesSumMinimization(a) {

    // First we need to check to see if the given array is even

    const isEven = a.length % 2 === 0;

    /* We will then write a ternary saying first if it is even,
     take the length of a divide it by 2 and subtract one to get
     the median number. And if its not even do Math.floor(a.length / 2) 
     to get the median number.  */

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}



console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));