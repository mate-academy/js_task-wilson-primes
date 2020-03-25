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
  let number;
  let factorial;

  function fact(n) {
    return n ? n * fact(n - 1) : 1;
  }

  if ((num ^ 0) !== num) {
    return false;
  } else if (num > 0) {
    factorial = fact(num - 1);
    number = (factorial + 1) / (num * num);
  } else {
    factorial = fact(num * (-1) - 1);

    number = num % 2 === 0 ? (factorial + 1) / (num * num)

      : (factorial * (-1) + 1) / (num * num);
  }

  return (number ^ 0) === number;
}
module.exports = isWilsonPrime;
