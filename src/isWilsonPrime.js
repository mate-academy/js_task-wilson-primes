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
  if (parseInt(num) !== num || num <= 0) {
    return false;
  }
  // checking for prime numbers
  if (num % 2 === 0 && num > 2) {
    return false;
  }

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    };
  }

  // factorial function
  const factorialNum = (n) => {
    let factorial = 1;
    if (n === 0) {
      return 1;
    };

    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }

    return factorial;
  };

  // is Wilson prime?
  if ((factorialNum(num - 1) + 1) % (num * num) === 0) {
    return true;
  }

  return false;
}

module.exports = isWilsonPrime;
