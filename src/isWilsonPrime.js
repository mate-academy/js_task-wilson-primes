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
  const numNew = num - 1;

  let interim = 1;
  let count = 0;
  for (let i = 1; i <= numNew; i++) {
    count = interim * i;
    interim = count;
  }

  const result = (count + 1) / (num * num);

  return Math.round(result) === result;
}

module.exports = isWilsonPrime;
