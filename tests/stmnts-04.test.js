/* eslint-disable no-undef */
const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  kelvinToCelsius,
  celsiusToKelvin,
} = require('../src/stmnts-04');

test('fahrenheitToCelsius', () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
  expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
});

test('celsiusToFahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
  expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
});

test('kelvinToCelsius', () => {
  expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
  expect(kelvinToCelsius(373.15)).toBeCloseTo(100);
});

test('celsiusToKelvin', () => {
  expect(celsiusToKelvin(0)).toBeCloseTo(273.15);
  expect(celsiusToKelvin(100)).toBeCloseTo(373.15);
});
