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
  if (num < 0 || num % 1 != 0)
    return false;
  return ((factorial(num-1) + 1) / (num * num) % 1 == 0) ?  true :  false;
}

let factorialArray = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (factorialArray[n] > 0)
    return factorialArray[n];
  return factorialArray[n] = factorial(n-1) * n;
}


module.exports = isWilsonPrime;
