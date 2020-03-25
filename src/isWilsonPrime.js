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
  const val1 = num - 1;

  if (val1 < 0 || !Number.isInteger(val1)) {
    return false;
  }

  function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
  }

  const val3 = (Math.floor(factorial(val1)) + 1) / Math.pow(num, 2);
  const res = Number.isInteger(val3);

  return res;
}

module.exports = isWilsonPrime;
