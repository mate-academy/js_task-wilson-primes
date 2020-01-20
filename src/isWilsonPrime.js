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
  let factorial = 1;
  let condition = 0;

  for (let i = 1; i < num; i += 1) {
    factorial *= i;
  }

  condition = (factorial + 1) / (num * num);

  if (Math.round(condition) === condition) {
    return true;
  }

  return false;
}

module.exports = isWilsonPrime;
