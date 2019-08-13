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
  if (Number.isInteger(num)
      && isPrime(num)
      && isIntegerExpression(num)) {
    return true;
  }
  return false;
}

function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

function isIntegerExpression(num) {
  const expression = (factorial(num - 1) + 1) / (num * num);
  return Number.isInteger(expression);
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < 10; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
}

module.exports = isWilsonPrime;
