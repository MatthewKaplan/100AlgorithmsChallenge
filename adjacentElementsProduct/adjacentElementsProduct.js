function adjacentElementsProduct(inputArray) {

  let largestProduct = inputArray[0] * inputArray[1];

  for(i=1; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, 100, 100, 7, 3]));