/*
 * 2. Use console.trace to log with a stack trace
 */

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
