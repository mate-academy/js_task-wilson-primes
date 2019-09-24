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
  if (num < 0 || num === 0 || num - Math.trunc(num) > 0) {
    return false;
  }
  const fact = factorial(num - 1);
  const checkForPrime = (fact + 1) / (num * num);
  return (checkForPrime - Math.trunc(checkForPrime) === 0);
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = isWilsonPrime;
