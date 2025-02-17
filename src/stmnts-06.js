/*
 * stmnts-06.js
 * Language: JavaScript
 * Test: tests/stmnts-6.test.js
 * Path: src/stmnts-06.js
 *
 * Boolean Expressions for Strings Assignment:
 * Implement functions that work with strings and return boolean values.
 * Your implementations should pass all tests defined in the test file.
 *
 * Note: Use string methods (like toUpperCase, trim, startsWith) to check
 * for conditions. These challenges help you practice basic string operations.
 */

/**
 * Returns a boolean indicating whether the given value is a string.
 * @param {*} str - The value to check.
 * @returns {boolean} - True if str is a string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
function isString(str) {
  if (typeof str === 'string') {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Returns a boolean indicating whether the given value is an empty string.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if str is blank (empty), false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
 */
function isBlank(str) {
  if (str.length === 0) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Creates a new string by concatenating the given strings.
 * If the second parameter is 0, the string starts with 'Hello '.
 * Otherwise, it starts with 'Bye '.
 * @param {string} name - The name of the person.
 * @param {string|number} num - The number to check.
 * @returns {string} - 'Hello ' or 'Bye ' concatenated with the name.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 */
function sayHelloOrBye(name, num) {
  if (num === 0) {
    return 'Hello ' + name;
  }

  else {
    return 'Bye ' + name;
  }
}

/**
 * Checks if two strings have the same value, case sensitive.
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {boolean} - True if the strings are exactly the same, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
 */
function compareStrings(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  else {
    return false;
  }
}

/* -------------------------------------------
   Additional String Boolean Expression Challenges
--------------------------------------------*/

/**
 * Checks if the entire string is in uppercase.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if all alphabetic characters in str are uppercase.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
function isUpperCase(str) {
  if (str.toUpperCase() === str) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if the entire string is in lowercase.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if all alphabetic characters in str are lowercase.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 */
function isLowerCase(str) {
  if (str.toLowerCase() === str) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if a string has a specified length.
 * @param {string} str - The string to check.
 * @param {number} length - The expected length.
 * @returns {boolean} - True if the length of str equals the given length.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */
function hasLength(str, length) {
  if (str.length === length) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if a string starts with the given substring.
 * @param {string} str - The main string.
 * @param {string} prefix - The prefix to check.
 * @returns {boolean} - True if str starts with prefix.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
function startsWithSubstring(str, prefix) {
  if (str.startsWith(prefix)) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if a string ends with the given substring.
 * @param {string} str - The main string.
 * @param {string} suffix - The suffix to check.
 * @returns {boolean} - True if str ends with suffix.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 */
function endsWithSubstring(str, suffix) {
  if (str.endsWith(suffix)) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if a string contains a given substring.
 * @param {string} str - The main string.
 * @param {string} substring - The substring to search for.
 * @returns {boolean} - True if str contains substring.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
function containsSubstring(str, substring) {
  if (str.includes(substring)) {
    return true;
  }

  else {
    return false;
  }
}

/**
 * Checks if a string contains only alphabetic characters.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if str contains only letters.
 */
function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if a string contains only numeric digits.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if str contains only digits.
 */
function containsOnlyDigits(str) {
  if (isNaN(str)) {
    return false;
  }

  else {
    return true;
  }
}

/**
 * Checks if a string is empty or consists only of whitespace.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if str is empty or only whitespace.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 */
function isEmptyOrWhitespace(str) {
  if (str.trim() === '') {
    return true;
  }

  else {
    return false;
  }
}

// DO NOT EDIT THE FOLLOWING EXPORT STATEMENT.
// The test file depends on these exported function names.
module.exports = {
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
};
