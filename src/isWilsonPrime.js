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
function fact(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * fact(a - 1);
  }
}

function isWilsonPrime(num) {
  if (num <= 0 || !Number.isInteger(num)) {
    return false;
  }

  if (Number.isInteger((fact(num - 1) + 1) / (num * num))) {
    return true;
  }

  return false;
}

// another option ^^
// function isWilsonPrime(num) {
//   return num === 5 || num === 13 || num === 563;
// }

module.exports = isWilsonPrime;
