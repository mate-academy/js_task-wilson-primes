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
 * @return {number}
 */
function factorial(a) {
  let rval = 1;
  for (let i = 2; i <= a; i++) { rval = rval * i; }
  return rval;
}
function isWilsonPrime(num) {
  return Number.isInteger((factorial(num - 1) + 1) / (num * num));
}

module.exports = isWilsonPrime;
