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

function isValid(a) {
  if (a % 1 === 0) {
    return a > 1;
  } else {
    return false;
  }
}

function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

function isWilsonPrime(num) {
  if (isValid(num)) {
    return (factorial(num - 1) + 1) / Math.pow(num, 2) % 1 === 0;
  } else {
    return false;
  }
}

module.exports = isWilsonPrime;
