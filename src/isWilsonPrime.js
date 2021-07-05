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

function factorial(n) {
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  }

  return n * factorial(n - 1);
}

function isWilsonPrime(num) {
  return Number.isInteger((factorial(num - 1) + 1) / (num * num));
}

module.exports = isWilsonPrime;
