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
 * @return {number}
 */
function fact(num) {
  return num ? num * fact(num - 1) : 1;
}

function isWilsonPrime(num) {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 1 !== 0) {
    return false;
  }

  return ((fact(num - 1) + 1) % (num * num) === 0);
}

module.exports = isWilsonPrime;
