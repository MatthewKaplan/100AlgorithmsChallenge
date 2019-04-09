function addTwoDigitsWithReduce(n: any): number {

  // First were going to take the value of 'n' and stringify it using the
  // .toString() method so that we can use javascript string methods on it. Such
  // as .split() which I'll do next so that I can get 2 values. So nums will 
  // equal ['2', '9']

  const nums = n.toString().split('');

  // Now we will just run a simple reduce method on the array of nums. But becareful
  // since we originally converted n to a string if we don't use .parseInt() it will just 
  // concat the 2 strings together

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigitsWithReduce(29));





// OR a simpler solution we can just return parseInt() nums index 0 plus parseInt()
// nums index 1. So that would look something like this:

function addTwoDigitsWithoutReduce(n: any): number {

  const nums = n.toString().split('')

  return parseInt(nums[0]) + parseInt(nums[1]);

}

console.log(addTwoDigitsWithoutReduce(19));