/* eslint-disable no-undef */
const {
  isInteger,
  isOdd,
  isEven,
  isNegative,
  isPositive,
  isZero,
  isNonNegative,
  isDivisibleBy,
  isBetween,
  isSquare,
  isCube,
} = require('../src/stmnts-05');

test('isInteger', () => {
  expect(isInteger(5)).toBe(true);
  expect(isInteger(5.5)).toBe(false);
  expect(isInteger('5')).toBe(false);
});

test('isOdd', () => {
  expect(isOdd(3)).toBe(true);
  expect(isOdd(4)).toBe(false);
});

test('isEven', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(3)).toBe(false);
});

test('isNegative', () => {
  expect(isNegative(-1)).toBe(true);
  expect(isNegative(1)).toBe(false);
});

test('isPositive', () => {
  expect(isPositive(1)).toBe(true);
  expect(isPositive(-1)).toBe(false);
});

test('isZero', () => {
  expect(isZero(0)).toBe(true);
  expect(isZero(1)).toBe(false);
});

test('isNonNegative', () => {
  expect(isNonNegative(0)).toBe(true);
  expect(isNonNegative(-1)).toBe(false);
});

test('isDivisibleBy', () => {
  expect(isDivisibleBy(10, 2)).toBe(true);
  expect(isDivisibleBy(10, 3)).toBe(false);
});

test('isBetween', () => {
  expect(isBetween(5, 1, 10)).toBe(true);
  expect(isBetween(0, 1, 10)).toBe(false);
});

test('isSquare', () => {
  expect(isSquare(16)).toBe(true);
  expect(isSquare(14)).toBe(false);
});

test('isCube', () => {
  expect(isCube(27)).toBe(true);
  expect(isCube(20)).toBe(false);
});
