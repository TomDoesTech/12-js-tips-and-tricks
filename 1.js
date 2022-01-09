/*
1. Remove falsy values from an array with filter
*/
const myArray = [null, "1", "2", undefined, 0, 1, 2];

console.log(myArray.filter(Boolean));
