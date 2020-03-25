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

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}


function isWilsonPrime(num) {
  
  if (num < 0 || num % 1 !== 0) {
    return false;
  }

  else if ((((factorial(num - 2) * (num - 1)) + 1) % Math.pow(num, 2)) === 0 ) {
    return true;
  }

  return false;
}

module.exports = isWilsonPrime;
