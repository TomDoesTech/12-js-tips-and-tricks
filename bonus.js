/*
 * Bonus: XOR
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
 */

//const nums = [1, 1, 1, 2, 1, 1, 1];
const nums = [1, 1, 1, 2, 3, 1, 1, 1];

function strayNumber(arr) {
  return arr.reduce((acc, curr) => {
    return acc ^ curr;
  });
}

console.log(strayNumber(nums));
