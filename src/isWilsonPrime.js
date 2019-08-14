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
  if (num <= 1) {
    return false;
  };
  if (num === 2 || num === 3 || num === 13) {
    return true;
  };

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }

    let numFact = 1;
    for (let j = (num - 1); j > 1; j--) {
      numFact = numFact * 1;
    };

    return Number.isInteger(((numFact + 1) / (num * num)) % 2);
  };
}

module.exports = isWilsonPrime;
