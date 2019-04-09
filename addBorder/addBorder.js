function addBorder(picture) {

  // First were going to create a wall of asterisks(*) using the .repeat()
  // method that is the length of the first index of the array (picture)
  // and add 2 to that to get a wall that equals ('*****')

  const wall = '*'.repeat(picture[0].length + 2)

  // Now we need to use the 2 methods .push() and .unshift() to add the wall
  // of asterisks(*) to the beginning and end of the array (picture). So that
  // picture array looks like ['*****', 'abc', 'ded', '*****']

  picture.push(wall)
  picture.unshift(wall)

  // Now we need to add an asterisks(*) to the beginning and end of the middle
  // elements in the picture array. ('*abc*', '*ded*'). I will use a for loop
  // and the concat method to accomplish this

  for (let i=1; i < picture.length; i++){
    picture[i] = '*'.concat(picture[i], '*');
  }

  // Return picture 

  return picture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["Matthew", "Kaplan"]));

// Expected output: ['*****', '*abc*', '*ded*', '*****']