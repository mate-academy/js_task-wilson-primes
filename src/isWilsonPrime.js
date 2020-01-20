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
  let fuctorialNum = num - 1;
  let fuctorialRes;

  for (fuctorialRes = 1; fuctorialNum > 0; fuctorialNum--) {
    fuctorialRes *= fuctorialNum;
  }

  return Number.isInteger((fuctorialRes + 1) / (num * num));
}

module.exports = isWilsonPrime;
