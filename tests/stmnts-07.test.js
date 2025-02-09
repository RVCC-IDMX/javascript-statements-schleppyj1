/* eslint-disable no-undef */
const {
  logicalAnd,
  logicalOr,
  invertBoolean,
  countDigits,
  sumOfDigits,
  reverseNumber,
  isWithinRange,
} = require('../src/stmnts-07');

test('logicalAnd', () => {
  expect(logicalAnd(true, true)).toBe(true);
  expect(logicalAnd(true, false)).toBe(false);
});

test('logicalOr', () => {
  expect(logicalOr(false, false)).toBe(false);
  expect(logicalOr(false, true)).toBe(true);
});

test('invertBoolean', () => {
  expect(invertBoolean(true)).toBe(false);
  expect(invertBoolean(false)).toBe(true);
});

test('countDigits', () => {
  expect(countDigits(12345)).toBe(5);
  expect(countDigits(0)).toBe(1);
});

test('sumOfDigits', () => {
  expect(sumOfDigits(123)).toBe(6);
  expect(sumOfDigits(0)).toBe(0);
});

test('reverseNumber', () => {
  expect(reverseNumber(123)).toBe(321);
  expect(reverseNumber(100)).toBe(1);
});

test('isWithinRange', () => {
  expect(isWithinRange(5, 1, 10)).toBe(true);
  expect(isWithinRange(0, 1, 10)).toBe(false);
});
