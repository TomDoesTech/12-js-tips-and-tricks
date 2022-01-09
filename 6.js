/*
 * Use async await instead of .then & .catch
 */

async function iPromise() {
  return "I resolved";
}

async function run() {
  try {
    const result = await iPromise();
    return result;
  } catch (e) {
    console.error(e);
  }
}

run();
