#!/usr/bin/env node
import { checkAnswers, getRandomNumber } from '..';

const greeting = 'Find the greatest common divisor of given numbers.\n';

const getRandomDivisor = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  return `${firstNum} ${secondNum}`;
};

const getCorrectDivisorAnswer = (num) => {
  let numIndex = 0;
  let firstNum = '';
  let secondNum = '';

  while (numIndex < num.length) {
    if (num[numIndex] === ' ' && firstNum === '') {
      firstNum = num.substring(0, numIndex);
    }
    if (num[numIndex] === ' ') {
      secondNum = num.substring(numIndex + 1);
    }
    numIndex += 1;
  }

  let smallestDivisor = firstNum > secondNum ? secondNum : firstNum;

  while (smallestDivisor > 1) {
    if ((firstNum % smallestDivisor === 0) && (secondNum % smallestDivisor === 0)) {
      return smallestDivisor.toString();
    }
    smallestDivisor -= 1;
  }
  return '1';
};

export default () => {
  checkAnswers(getCorrectDivisorAnswer, getRandomDivisor, greeting);
};
