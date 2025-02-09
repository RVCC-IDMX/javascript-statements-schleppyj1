/* eslint-disable no-undef */
const {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
  rectangleDiagonal,
  trapezoidArea,
} = require('../src/stmnts-03');

test('rectanglePerimeter', () => {
  expect(rectanglePerimeter(5, 10)).toBeCloseTo(30.00);
  expect(rectanglePerimeter(3.5, 4.5)).toBeCloseTo(16.00);
});

test('rectangleArea', () => {
  expect(rectangleArea(5, 10)).toBeCloseTo(50.00);
  expect(rectangleArea(3.5, 4.5)).toBeCloseTo(15.75);
});

test('circleCircumference', () => {
  expect(circleCircumference(5)).toBeCloseTo(31.42, 2);
  expect(circleCircumference(3.5)).toBeCloseTo(21.99, 2);
});

test('circleArea', () => {
  expect(circleArea(5)).toBeCloseTo(78.54, 2);
  expect(circleArea(3.5)).toBeCloseTo(38.48, 2);
});

test('triangleArea', () => {
  expect(triangleArea(5, 10)).toBeCloseTo(25.00);
  expect(triangleArea(3.5, 4.5)).toBeCloseTo(7.88, 2);
});

test('pythagorean', () => {
  expect(pythagorean(3, 4)).toBeCloseTo(5.00);
  expect(pythagorean(5, 12)).toBeCloseTo(13.00);
});

test('rectangleDiagonal', () => {
  expect(rectangleDiagonal(3, 4)).toBeCloseTo(5.00);
  expect(rectangleDiagonal(5, 12)).toBeCloseTo(13.00);
});

test('trapezoidArea', () => {
  expect(trapezoidArea(3, 5, 4)).toBeCloseTo(16.00);
  expect(trapezoidArea(2.5, 3.5, 4)).toBeCloseTo(12.00);
});
