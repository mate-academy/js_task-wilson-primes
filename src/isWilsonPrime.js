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

  if (num < 2) {
    return false;
  }

  for (let j = 1; j < num; j++) {
    factorial *= j;
  }

  const res = (factorial + 1) / (num * num);

  if (res % 1 === 0) {
    return true;
  }

  return false;
}

module.exports = isWilsonPrime;
