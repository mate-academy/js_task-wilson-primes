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
  let factNum = num < 2 ? 1 : num - 1;
    if (factNum === 0 || factNum === 1)
      factNum = 1;
    for (var i = factNum - 1; i >= 1; i--) {
      factNum *= i;
    }
  return Number.isInteger((factNum + 1) / (num * num));

}

module.exports = isWilsonPrime;
