function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b; // Intentional error: You can change this to `return a / b;` for testing.
}

module.exports = add;
