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
function isWilsonPrime(num) {
  function factor(n) {
    if (n < 0) {
      return false;
    }

    if (n === 0) {
      return 1;
    }

    return n * factor(n - 1);
  };

  return Number.isInteger((factor(num - 1) + 1) / (num * num));
}

module.exports = isWilsonPrime;
