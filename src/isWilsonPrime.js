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
  // write code here
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  const isWholeNumber = (n) => Math.trunc(n) === n;

  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i < n / 2; i++) {
      if (!(n % i)) {
        return false;
      }
    }

    return true;
  };

  return isPrime(num) && isWholeNumber((factorial(num - 1) + 1) / (num * num));
}

module.exports = isWilsonPrime;
