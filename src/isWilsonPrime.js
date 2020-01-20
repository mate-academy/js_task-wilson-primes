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
  if (num < 0 || !Number.isInteger(num)) {
    return false;
  }

  const factorial = (number) => {
    return number ? number * factorial(number - 1) : 1;
  };

  const result = (factorial(num - 1) + 1) / (num * num);

  return Number.isInteger(result);
};

module.exports = isWilsonPrime;
