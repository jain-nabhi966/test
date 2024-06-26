// moduleB.js
const moduleA = require('./moduleA');

console.log('Module B is loaded');

module.exports = {
  baz: () => {
    console.log('Module B -> baz');
  },
  qux: () => {
    console.log('Module B -> qux');
  }
};

