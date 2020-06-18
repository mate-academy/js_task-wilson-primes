'use strict';

function isWilsonPrime(num) {
  // write code here
  function factorial(x) {
    let i = x - 1;
    let res = x;

    while (i > 0) {
      res *= i;
      i--;
    }

    return res;
  }

  return ((factorial((num - 1)) + 1) / (num ** 2) % 1 === 0);
}

module.exports = isWilsonPrime;
