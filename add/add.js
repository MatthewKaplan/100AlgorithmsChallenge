// 1. Write a function that returns the sum of two numbers.

function add(param1, param2) {
    return param1 + param2;
}


// 2. Write a function that returns the sum of all numbers regardless of # of params.

function add2(...param1) {
    let total = 0;

    param1.forEach( num => {
        total += num
    })

    return total;
}



console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

