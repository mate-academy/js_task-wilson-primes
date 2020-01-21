'use strict';

/**
 * fs_on_dec19_salogubova
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

function isWilsonPrime(num) {
  if (!Number.isInteger(num)) {
    return false;
  }

  return Number.isInteger((factorial(num - 1) + 1) / (num * num));
}

function factorial(x) {
  if (x < 0) {
    return 0;
  }

  return (x === 0 || x === 1)
    ? 1
    : (x * factorial(x - 1));
}

module.exports = isWilsonPrime;
