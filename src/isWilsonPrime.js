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
  // write code here

  const firstCondition = isPrime(num);
  const secondCondition = wholeNumber(num);

  if (firstCondition && secondCondition) {
    return true;
  }

  return false;
}

function isPrime(num) {
  if (num < 0) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function factorial(num) {
  let sum = 1;

  for (let i = num; i > 0; i--) {
    sum *= i;
  }

  return sum;
}

function wholeNumber(num) {
  const check = (factorial(num - 1) + 1) / num / num;

  return check % 1 === 0;
}

module.exports = isWilsonPrime;
