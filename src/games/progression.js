#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const getRandomProgress = () => {
  let randomInt = getRandomInt();
  const step = getRandomInt();
  const randomPosition = getRandomInt(1, 10);
  let correctAnswer = 0;
  let question = '';
  let counter = 1;

  while (counter <= 10) {
    if (counter === randomPosition) {
      correctAnswer = randomInt + step;
      question += '.. ';
    } else {
      question += `${randomInt + step} `;
    }
    randomInt += step;
    counter += 1;
  }
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getRandomProgress);
};
