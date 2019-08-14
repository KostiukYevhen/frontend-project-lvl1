#!/usr/bin/env node
import { checkAnswers } from '..';
import getRandomInteger from '../utils';

const greeting = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = num => num % 2 === 0;
const getCorrectRandomAnswer = num => (isEven(num) ? 'yes' : 'no');

export default () => {
  checkAnswers(getCorrectRandomAnswer, getRandomInteger, greeting);
};
