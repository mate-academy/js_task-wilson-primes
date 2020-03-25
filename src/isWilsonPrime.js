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
  function isPrime(x) {
    let divider = 2;

    while (divider < x) {
      if (x % divider === 0) {
        return false;
      }
      divider++;
    }

    return true;
  }

  function factorial(i, acc = 1) {
    if (i === 1) {
      return acc;
    }

    return factorial(i - 1, i * acc);
  };

  if (num < 0) {
    return false;
  }

  if (num - (Math.trunc(num)) !== 0) {
    return false;
  }

  if (!(isPrime(num))) {
    return false;
  }

  if ((factorial(num - 1) + 1) % (num * num) === 0) {
    return true;
  }

  return false;
}

module.exports = isWilsonPrime;
