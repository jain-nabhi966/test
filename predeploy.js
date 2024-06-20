const add = require('./mins');

if (add(1, 2) !== 3) {
  throw new Error("Test failed");
}

console.log("Pre-deployment check passed!");
