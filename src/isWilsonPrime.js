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
  let calcFactorial = 1;
  for (let i = 2; i < num; i++) {
    calcFactorial *= i;
  }

  if (Number.isInteger(num)) {
    const results = (calcFactorial + 1) / (num * num);
    if (results % 1 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = isWilsonPrime;
