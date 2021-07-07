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
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

function isWilsonPrime(num) {
  const isFraction = (num - Math.floor(num)) !== 0;
  if (num > 0 && !isFraction) {
    return Number.isInteger(((factorial(num - 1) + 1) / (num * num)));
  }
  return false;
}

module.exports = isWilsonPrime;
