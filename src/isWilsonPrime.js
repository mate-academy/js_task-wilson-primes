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
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

function isWilsonPrime(num) {
  if (num % 1 !== 0) {
    return false;
  } else {
    const rest = (factorial(num - 1) + 1) / (num * num);

    return isPrime(Math.ceil(rest));
  }
}

module.exports = isWilsonPrime;
