function add(a, b) {
 if (typeof a !== "number" || typeof b !== "number") { // Intentional error: double quotes instead of single quotes
  throw new Error("Both parameters must be numbers") // Intentional error: missing semi-colon
  }
  return a + b // Intentional error: incorrect indentation
}

module.exports = add // Intentional error: missing semi-colon
//nabhi jain lendbox
