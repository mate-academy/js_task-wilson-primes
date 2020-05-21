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
  // write code here
  function factorial(x) {
    let result = 1;

    for (let i = 2; i <= x; i++) {
      result = result * i;
    }

    return result;
  }

  return ((factorial((num - 1)) + 1) / (num ** 2) % 1 === 0);
}

module.exports = isWilsonPrime;
