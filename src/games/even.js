#!/usr/bin/env node
import { checkAnswers, getAnswer, getRandomNumber } from '..';

const greeting = 'Answer "yes" if number even otherwise answer "no".\n';

const getCorrectRandomAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  checkAnswers(getAnswer, getCorrectRandomAnswer, getRandomNumber, greeting);
};
