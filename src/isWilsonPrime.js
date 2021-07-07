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
 *2
 * @param {number} num
 *
 * @return {boolean}
 */

function isWilsonPrime(num) {
  let factorialVal = 1;

  if (num > 0) {
    for (let i = 1; i <= num - 1; i++) {
      factorialVal *= i;
    }
  } else {
    return false;
  }

  const res = (factorialVal + 1) / num ** 2;

  if (Number.isInteger(res)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isWilsonPrime;
