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
  let fact = num - 1;

  for (let i = fact; i > 1; i--) {
    fact = fact * (i - 1);
  }

  // eslint-disable-next-line camelcase
  const wilsons_num = (fact + 1) / (num * num);

  // eslint-disable-next-line camelcase
  if (wilsons_num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isWilsonPrime;
