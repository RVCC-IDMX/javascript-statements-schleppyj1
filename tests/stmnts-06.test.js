/* eslint-disable no-undef */
const {
  isString,
  isBlank,
  sayHelloOrBye,
  compareStrings,
  isUpperCase,
  isLowerCase,
  hasLength,
  startsWithSubstring,
  endsWithSubstring,
  containsSubstring,
  isAlpha,
  containsOnlyDigits,
  isEmptyOrWhitespace,
} = require('../src/stmnts-06');

test('isString', () => {
  expect(isString("Hello")).toBe(true);
  expect(isString(123)).toBe(false);
});

test('isBlank', () => {
  expect(isBlank("")).toBe(true);
  expect(isBlank("not blank")).toBe(false);
});

test('sayHelloOrBye', () => {
  expect(sayHelloOrBye("Alice", 0)).toBe("Hello Alice");
  expect(sayHelloOrBye("Bob", 1)).toBe("Bye Bob");
});

test('compareStrings', () => {
  expect(compareStrings("abc", "abc")).toBe(true);
  expect(compareStrings("abc", "ABC")).toBe(false);
});

test('isUpperCase', () => {
  expect(isUpperCase("HELLO")).toBe(true);
  expect(isUpperCase("Hello")).toBe(false);
});

test('isLowerCase', () => {
  expect(isLowerCase("hello")).toBe(true);
  expect(isLowerCase("Hello")).toBe(false);
});

test('hasLength', () => {
  expect(hasLength("test", 4)).toBe(true);
  expect(hasLength("test", 5)).toBe(false);
});

test('startsWithSubstring', () => {
  expect(startsWithSubstring("Hello world", "Hello")).toBe(true);
  expect(startsWithSubstring("Hello world", "world")).toBe(false);
});

test('endsWithSubstring', () => {
  expect(endsWithSubstring("Hello world", "world")).toBe(true);
  expect(endsWithSubstring("Hello world", "Hello")).toBe(false);
});

test('containsSubstring', () => {
  expect(containsSubstring("Hello world", "lo wo")).toBe(true);
  expect(containsSubstring("Hello world", "test")).toBe(false);
});

test('isAlpha', () => {
  expect(isAlpha("Hello")).toBe(true);
  expect(isAlpha("Hello123")).toBe(false);
});

test('containsOnlyDigits', () => {
  expect(containsOnlyDigits("12345")).toBe(true);
  expect(containsOnlyDigits("123a45")).toBe(false);
});

test('isEmptyOrWhitespace', () => {
  expect(isEmptyOrWhitespace("   ")).toBe(true);
  expect(isEmptyOrWhitespace("not empty")).toBe(false);
});
