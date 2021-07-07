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
  if (num < 0 || !Number.isInteger(num)) {
    return false;
  }

  // calculate (num-1)!     lines 28-32
  let res = 1;

  for (let i = 2; i <= num - 1; i++) {
    res *= i;
  }

  const wilson = (res + 1) / (num * num);

  return Number.isInteger(wilson);
}

module.exports = isWilsonPrime;
