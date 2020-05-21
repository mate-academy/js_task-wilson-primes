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
  if (num < 0) {
    return false;
  }

  if (IsPrime(num)) {
    const res = (factorialFunc(num) + 1) / (num * num);

    if ((res - Math.floor(res)) === 0) {
      return true;
    }
  }

  return false;
}

function factorialFunc(num) {
  let factorial = 1;

  for (let j = 1; j < num; j++) {
    factorial *= j;
  }

  return factorial;
}

function IsPrime(num) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); ++i) {
    if (num % i === 0) {
      return false;
    };
  }

  return true;
}

module.exports = isWilsonPrime;
