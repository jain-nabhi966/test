const add = require('./mins');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('throws an error when parameters are not numbers', () => {
    expect(() => add('1', 2)).toThrow('Both parameters must be numbers');
});
