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
  let num1 = num - 1;
  let result = 1;
  let calc = 1;

  if (num1 === 0 || num1 === 1) {
    return 1;
  } else if (num1 < 0) {
    return false;
  }

  while (num1 > 1) {
    result = result * num1;
    num1--;
  }

  result++;
  calc = result / (num * num);

  if (Number.isInteger(calc)) {
    return true;
  }
}

module.exports = isWilsonPrime;
