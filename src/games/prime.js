#!/usr/bin/env node
import { checkAnswers, getRandomNumber } from '..';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const getCorrectPrimeAnswer = (num) => {
  let numIndex = 2;
  if (num === 1) {
    return 'yes';
  }
  while (numIndex <= num) {
    if (num % numIndex === 0) {
      if (numIndex === num) {
        return 'yes';
      }
      return 'no';
    }
    numIndex += 1;
  }
  return 'no';
};

export default () => {
  checkAnswers(getCorrectPrimeAnswer, getRandomNumber, greeting);
};
