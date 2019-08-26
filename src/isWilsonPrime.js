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
  for (let x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }

  function factorial(number) {
    return number > 1 ? number * factorial(number - 1) : 1;
  }

  return Number.isInteger((factorial(num - 1) + 1) / (num * num));
}

module.exports = isWilsonPrime;
