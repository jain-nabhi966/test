// moduleA.js
const moduleB = require('./moduleB');

console.log('Module A is loaded');

module.exports = {
  foo: () => {
    console.log('Module A -> foo');
  },
  bar: () => {
    console.log('Module A -> bar');
  }
};

moduleB.baz(); // Calling moduleB function from moduleA
