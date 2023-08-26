// test to test all match functions define in primitive.test
const { expect } = require('@jest/globals');
const {
  add,
  subtract,
  multiply,
  power,
} = require('../../src/primitive-type/primitive.js');

test('Should function add give 1 plus 2 to be 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Should function subtract give 5 minus 1 to be 4', () => {
  expect(subtract(5, 1)).toBe(4);
});

test('Should function subtract give 2 minus 3 to be -1', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('Should function multiply gives 8 when 4 multiply 2 ', () => {
  expect(multiply(4, 2)).toBe(8);
});

test('Should function power gives 2^3 to be 8 ', () => {
  expect(power(2, 3)).toBe(8);
});
