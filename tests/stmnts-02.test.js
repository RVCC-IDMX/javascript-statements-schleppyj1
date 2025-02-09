/* eslint-disable no-undef */
const {
  absoluteDifference,
  power,
  convertMinutesToSeconds,
  convertHoursToSeconds,
} = require('../src/stmnts-02');

test('absoluteDifference', () => {
  expect(absoluteDifference(5, 3)).toBe(2);
  expect(absoluteDifference(3, 5)).toBe(2);
  expect(absoluteDifference(-5, 3)).toBe(8);
  expect(absoluteDifference(3, -5)).toBe(8);
});

test('power', () => {
  expect(power(2, 3)).toBe(8);
  expect(power(3, 2)).toBe(9);
  expect(power(2, 0)).toBe(1);
  expect(power(2, -1)).toBeCloseTo(0.5);
});

test('convertMinutesToSeconds', () => {
  expect(convertMinutesToSeconds(1)).toBe(60);
  expect(convertMinutesToSeconds(2.5)).toBeCloseTo(150);
});

test('convertHoursToSeconds', () => {
  expect(convertHoursToSeconds(1)).toBe(3600);
  expect(convertHoursToSeconds(0.5)).toBe(1800);
});
