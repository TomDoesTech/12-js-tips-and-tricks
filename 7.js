/*
 * 7. Create a pipe function
 */

function double(value) {
  return value * 2;
}

function triple(value) {
  return value * 3;
}

function half(value) {
  return value / 2;
}

function reverse(value) {
  return parseInt(String(value).split("").reverse().join(""), 10);
}

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const result = (double, triple, half, reverse)(10);
