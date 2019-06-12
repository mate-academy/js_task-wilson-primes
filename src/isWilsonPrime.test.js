'use strict';

const isWilsonPrime = require('./isWilsonPrime');

test('Should return true for a Wilson prime', () => {
  expect(isWilsonPrime(13))
    .toBe(true);
});

test('Should return true for a largest Wilson prime', () => {
  expect(isWilsonPrime(563))
    .toBe(true);
});

test('Should return false for natural numbers', () => {
  expect(isWilsonPrime(12))
    .toBe(false);
});

test('Should return false for a prime number', () => {
  expect(isWilsonPrime(151))
    .toBe(false);
});

test('Should return false for negative numbers', () => {
  expect(isWilsonPrime(-5))
    .toBe(false);
});

test('Should return false for fraction numbers', () => {
  expect(isWilsonPrime(13.3))
    .toBe(false);
});
