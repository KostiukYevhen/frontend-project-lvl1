#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomDivisor = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const getDivisors = cons(firstNum, secondNum);
  return getDivisors;
};

const getCorrectAnswer = () => {
  const firstNum = car(getRandomDivisor());
  const secondNum = cdr(getRandomDivisor());
  const question = `${firstNum} ${secondNum}`;
  let smallestDivisor = firstNum > secondNum ? secondNum : firstNum;

  while (smallestDivisor > 1) {
    if ((firstNum % smallestDivisor === 0) && (secondNum % smallestDivisor === 0)) {
      return cons(question, smallestDivisor);
    }
    smallestDivisor -= 1;
  }
  return cons(question, smallestDivisor);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
