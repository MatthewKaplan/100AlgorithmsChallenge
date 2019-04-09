function adjacentElementsProduct(inputArray: number[]): number {

  /* I will first create a variable largestProduct which is just the first element
   in the array being passed in the function (inputArray) multiplied by the second
   element in the inputArray */

  let largestProduct = inputArray[0] * inputArray[1];


  /* I will then create a for loop to loop though the inputArray.length - 1 so that it
   doesn't try to multiple the last number in the index by a number that doesn't
   exist. And then I will create a local variable product which is equal to 
   inputArray[i] * inputArray[i + 1]; */

  /* and then create a ternary with the conditional being if largestProduct < product
   then return product, else return largestProduct. */  

  for(let i=1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, 100, 100, 7, 3]));