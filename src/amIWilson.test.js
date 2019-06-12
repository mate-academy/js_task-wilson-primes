'use strict';

const amIWilson = require('./amIWilson');

test('Should return true for a Wilson prime', () => {
  expect(amIWilson(13))
    .toBe(true);
});

test('Should return false for a not Wilson prime', () => {
  expect(amIWilson(9))
    .toBe(false);
});
