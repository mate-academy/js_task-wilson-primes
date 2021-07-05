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

const factorial = function(factNum) {
  return factNum < 2
    ? factNum
    : factNum * factorial(factNum - 1);
};

function isWilsonPrime(num) {
  // write code here
  const wilsonCalc = (factorial(num - 1) + 1) / Math.pow(num, 2);

  if (Number.isInteger(wilsonCalc) === true) {
    return true;
  }
  return false;
}

module.exports = isWilsonPrime;
