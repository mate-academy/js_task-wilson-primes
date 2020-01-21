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
function factorial(num) {
  return (num !== 1) ? num * factorial(num - 1) : 1;
}

function isWilsonPrime(num) {
  if (num < 2 || num % 1 !== 0) {
    return false;
  }

  const factorialNum = factorial(num - 1);

  const wilsonCondition = (factorialNum + 1) / (num * num);

  return wilsonCondition % 1 === 0;
}

module.exports = isWilsonPrime;
