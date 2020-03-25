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
  let factorial = 1;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  for (let j = 1; j <= num - 1; j++) {
    factorial *= j;
  }

  return Number.isInteger((factorial + 1) / (num * num));
}

module.exports = isWilsonPrime;
