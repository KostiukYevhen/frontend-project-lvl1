#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = () => {
  const randomInt = getRandomInt();
  let counter = 2;
  if (randomInt === 1) {
    return cons(randomInt, 'yes');
  }
  while (counter <= randomInt) {
    if (randomInt % counter === 0) {
      if (counter === randomInt) {
        return cons(randomInt, 'yes');
      }
      return cons(randomInt, 'no');
    }
    counter += 1;
  }
  return cons(randomInt, 'no');
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
