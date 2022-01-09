/*
 * 10. Conditionally add to objects
 */

const username = "Tom";
const gender = undefined;
const channel = "TomDoesTech";
const salary = 1_000_000_000;

const person = {
  username,
  ...(gender && { gender }),
  channel,
  salary,
};

console.log(person);
