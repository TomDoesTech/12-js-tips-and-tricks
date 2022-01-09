/*
 * 9. Format stringified objects
 */

const obj = {
  person: {
    name: "Tom",
    gender: undefined,
    channel: "TomDoesTech",
  },
};

console.log(JSON.stringify(obj, null, 2));
