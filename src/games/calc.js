#!/usr/bin/env node
import * as index from '..';

const greeting = 'What is the result of the expression?\n';

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.round(Math.random() * 2);

  const expression = `${index.getRandomNumber()} ${operators[operatorIndex]} ${index.getRandomNumber()}`;

  return expression;
};

const getCorrectExpressionAnswer = (num) => {
  let numIndex = 0;
  let leftSide = '';
  let rightSide = '';
  let result = '';

  while (numIndex < num.length) {
    if (num[numIndex] === ' ' && leftSide === '') {
      leftSide = num.substring(0, numIndex);
    }
    if (num[numIndex] === ' ') {
      rightSide = num.substring(numIndex);
    }
    numIndex += 1;
  }

  while (numIndex > 0) {
    if (num[numIndex] === '+') {
      result += +leftSide + +rightSide;
    }
    if (num[numIndex] === '-') {
      result += +leftSide - +rightSide;
    }
    if (num[numIndex] === '*') {
      result += +leftSide * +rightSide;
    }
    numIndex -= 1;
  }

  return result;
};

export default () => {
  index.checkAnswers(index.getAnswer, getCorrectExpressionAnswer, getRandomExpression, greeting);
};
