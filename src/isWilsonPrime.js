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
  if (num <= 0 || (num !== Math.trunc(num))) {
    return false;
  }

  let numMultiplyNum = 0;
  let result = 0;
  numMultiplyNum = num * num;
  const num2 = num - 1;

  function factorial(a) {
    return (a !== 1) ? a * factorial(a - 1) : 1;
  }

  result = (factorial(num2) + 1) / numMultiplyNum;

  return (result === Math.trunc(result));
}

module.exports = isWilsonPrime;
