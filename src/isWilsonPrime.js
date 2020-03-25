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
  function factorial(number) {
    let total = 1;

    for (let i = 1; i <= number; i++) {
      total *= i;
    }

    return total;
  }

  const result = (factorial(num - 1) + 1) / (num * num);

  if (result % 1) {
    return false;
  } else {
    return true;
  }
}

module.exports = isWilsonPrime;
