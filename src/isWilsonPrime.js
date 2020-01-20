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
  let wilsonProduct = 1;

  if (num < 0) {
    return false;
  }

  for (let i = 1; i < num; i++) {
    wilsonProduct = wilsonProduct * i;
  }

  for (let j = 2; j < num; j++) {
    if (num % j !== 0) {
      if (((wilsonProduct + 1) / (num * num) % 1) !== 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

module.exports = isWilsonPrime;
