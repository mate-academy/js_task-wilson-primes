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
  let factorialResult = 1;
  for (let n = 2; n < num; n++) {
    factorialResult *= n;
  }

  const checkedNumber = (factorialResult + 1) / Math.pow(num, 2);

  return Number.isInteger(checkedNumber);
}

module.exports = isWilsonPrime;
