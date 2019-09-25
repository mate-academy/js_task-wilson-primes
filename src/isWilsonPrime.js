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
  if (num <= 0 || (!Number.isInteger(num))) {
    return false;
  }
  const recArg = num - 1;

  function fact(n) {
    return n ? n * (fact(n - 1)) : 1;
  }
  const wilson = (fact(recArg) + 1) / (num * num);

  if (!Number.isInteger(wilson)) {
    return false;
  } return true;
}

module.exports = isWilsonPrime;
