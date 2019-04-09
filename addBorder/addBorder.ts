function addBorder(picture: string[]): string[] {

    // We first use .repeat() to create a wall of asterisks(*) that is the 
    // length of the first index of the array ("abc") plus 2 so 
    // wall = '*****'  

    const wall = '*'.repeat(picture[0].length + 2);

    // We then use unshift and push to add wall ('*****') to the beginning and
    // end of the picture array. (['*****', 'abc', 'ded', '*****'])

    picture.unshift(wall);
    picture.push(wall);

    // We then use a for loop to concat an asterisk on the beginning and end
    // of the middle 2 elements in the array ('*abc*', '*ded*')

    for(let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));

// Expected output: ['*****', '*abc*', '*ded*', '*****']