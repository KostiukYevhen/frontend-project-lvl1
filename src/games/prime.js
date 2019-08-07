#!/usr/bin/env node
import * as index from '..';

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
  index.checkAnswers(index.getAnswer, getCorrectPrimeAnswer, index.getRandomNumber, greeting);
};
