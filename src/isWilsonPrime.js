'use strict';

function isWilsonPrime(num) {
  function isPrimeNumber() {
    if (num < 2 || num % 1 !== 0) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function isWholeNumber() {
    const number = (factorial(num - 1) + 1) / (num * num);

    return number % 1 === 0;
  }

  function factorial(number) {
    if (number === 1) {
      return number;
    }

    return number * factorial(number - 1);
  }

  return isPrimeNumber() && isWholeNumber();
}

module.exports = isWilsonPrime;
