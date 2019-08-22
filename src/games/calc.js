#!/usr/bin/env node
import { cons, car, cdr } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.round(Math.random() * 2);
  const expression = cons(getRandomInt(), cons(operators[operatorIndex], getRandomInt()));
  return expression;
};

const getCorrectAnswer = () => {
  const expression = getRandomExpression();
  const leftSide = car(expression);
  const rightSide = cdr(cdr(expression));
  const operator = car(cdr(expression));
  const question = `${leftSide} ${operator} ${rightSide}`;
  let correctAnswer = '';

  switch (operator) {
    case '+':
      correctAnswer = leftSide + rightSide;
      break;
    case '-':
      correctAnswer = leftSide - rightSide;
      break;
    case '*':
      correctAnswer = leftSide * rightSide;
      break;
    default:
      break;
  }
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
