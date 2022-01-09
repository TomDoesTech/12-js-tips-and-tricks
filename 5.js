/*
 * Top level await
 * Requires NodeJS 14+ and either `"type": "module"` in your package.json or .mjs file
 */

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log("I'going to start sleeping");

await sleep(1000);

console.log("I've finished sleeping");
