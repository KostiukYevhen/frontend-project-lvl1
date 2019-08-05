#!/usr/bin/env node
import * as index from '../index';

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.round(Math.random() * 2);

  const expression = `${index.getRandomNumber()} ${operators[operatorIndex]} ${index.getRandomNumber()}`;

  return expression;
};

export const getCorrectExpressionAnswer = (num) => {
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
