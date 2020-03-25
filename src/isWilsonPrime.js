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
  const result = ((factorial(num - 1)) + 1) / (num * num);

  if (Number.isInteger(result)) {
    return true;
  } else {
    return false;
  }

  function factorial(number) {
    let n = number;

    for (let i = n - 1; i > 0; i--) {
      n *= i;
    }

    return n;
  }
}

module.exports = isWilsonPrime;
