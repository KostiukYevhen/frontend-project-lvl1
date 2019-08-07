#!/usr/bin/env node
import * as index from '..';

const greeting = 'Answer "yes" if number even otherwise answer "no".\n';

const getCorrectRandomAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  index.checkAnswers(index.getAnswer, getCorrectRandomAnswer, index.getRandomNumber, greeting);
};
