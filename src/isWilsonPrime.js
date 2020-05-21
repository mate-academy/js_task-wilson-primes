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
  let count = 1;
  let factorialResult = 1;

  if (num < 0) {
    return false;
  }

  while (count < num) {
    factorialResult *= count;
    count++;
  }

  const prime = (factorialResult + 1) / (num * num);

  return (prime ^ 0) === prime;
}

module.exports = isWilsonPrime;
