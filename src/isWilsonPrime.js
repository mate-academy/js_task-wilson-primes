'use strict';

/**
 * Wilson primes satisfy the following condition:
 *
 * 1) Let Num represent a prime number.
 * 2) Then ((Num-1)! + 1) / (Num * Num) should give a whole number.
 *
 * Implement isWilsonPrime function:
 *
 * Function should return true if the given number is a Wilson prime
 *
 * Examples:
 * isWilsonPrime(5)      returns true
 * isWilsonPrime(9)      returns false
 *
 * @param {number} num
 *
 * @return {boolean}
 */
function getFactorial(n) {
  return n ? n * getFactorial(n - 1) : 1;
}

function isWilsonPrime(num) {
  if (num < 1 || !Number.isInteger(num)) {
    return false;
  }

  const factorialMinusOne = getFactorial(num - 1);
  const wilsonNumber = (factorialMinusOne + 1) / (num * num);

  return Number.isInteger(wilsonNumber);
}

module.exports = isWilsonPrime;
