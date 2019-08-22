#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getCorrectAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
