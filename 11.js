/*
 * Use optional chaining to safely access deeply nested properties
 */

const obj = {
  user: {
    name: "Jane Doe",
  },
};

console.log(obj?.person?.name);
