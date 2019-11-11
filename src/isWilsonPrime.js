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
  if (num < 0 || Math.ceil(num) - num > 0) {
    return false;
  }

  let fact = num - 1;

  for (let i = fact; --i;) {
    fact *= i;
  }

  const result = (fact + 1) / (num * num);

  return (result ^ 0) === result;
}

module.exports = isWilsonPrime;
