function addTwoDigitsWithReduce(n) {

  nums = n.toString().split('');

  return nums.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  });

}

console.log(addTwoDigitsWithReduce(29));


/*---------------------------------------------------------*/


function addTwoDigitsWithoutReduce(n) {

  nums = n.toString().split('');

  return parseInt(nums[0]) + parseInt(nums[1])

}

console.log(addTwoDigitsWithoutReduce(29));