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
  if (num % 1 !== 0 || num < 0) {
    return false;
  }

  const factorial = number => {
    let tempVal = 1;

    if (number === 1) {
      return 1;
    }

    for (let counter = 2; counter <= number; counter++) {
      tempVal *= counter;
    }

    return tempVal;
  };

  return ((factorial(num - 1) + 1) / (num * num)) % 1 === 0;
}

module.exports = isWilsonPrime;
