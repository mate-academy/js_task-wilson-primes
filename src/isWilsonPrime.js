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
// пока так)
const factorial = function(n) {
  if (n === 1) {
    return 1;
  } else if (n < 0) {
    return false;
  } else {
    return n * factorial(n - 1);
  }
};

function isWilsonPrime(num) {
  const result = (factorial(num - 1) + 1) / (num * num);

  if (result % 1) {
    return false;
  } else {
    return true;
  }
}

module.exports = isWilsonPrime;
