function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers'); // This will trigger a quotes error
  }
  return a + b; // This should trigger an indentation and semi-colon error
}

module.exports = add;
