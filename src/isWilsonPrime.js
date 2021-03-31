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
  function factorial(n) {
    let sum = 1;

    for (let i = 2; i <= n; i++) {
      sum *= i;
    }

    return sum;
  }

  return !((factorial(num - 1) + 1) % (num * num));
}
module.exports = isWilsonPrime;
