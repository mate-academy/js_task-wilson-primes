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
  const solution = (factorial(num - 1) + 1) / (num * num);

  return (solution ^ 0) === solution;
}

function factorial(n) {
  let fact = 1;

  if (n !== 0 || n !== 1) {
    fact = parseInt(n);

    for (let i = 1; i < n; i++) {
      fact *= i;
    }
  }

  return fact;
}

module.exports = isWilsonPrime;
