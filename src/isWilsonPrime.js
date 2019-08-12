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
  function factorial(checkedNumber) {
    let i = 1;
    let sum = 1;
    while (i <= checkedNumber) {
      sum *= i;
      i++;
    }
    return sum;
  }
  if (Number.isInteger((factorial(num - 1) + 1) / (num * num))) {
    return true;
  } else { return false; }
}

module.exports = isWilsonPrime;
