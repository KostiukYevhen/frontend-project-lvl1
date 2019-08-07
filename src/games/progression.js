#!/usr/bin/env node
import * as index from '..';

const greeting = 'What number is missing in the progression?\n';

const getRandomProgress = () => {
  let start = Math.round(Math.random() * (80 - 10) + 10);
  const randomNum = Math.round(Math.random() * 8);
  const step = 2;
  let result = '';
  let numIndex = 0;

  while (numIndex < 10) {
    if (numIndex === randomNum) {
      result += '.. ';
    } else {
      result += `${start + step} `;
    }
    start += step;
    numIndex += 1;
  }

  return result;
};

const getCorrectProgressAnswer = (str) => {
  let strIndex = 0;
  let result = '';
  while (strIndex < str.length - 1) {
    if (str.substring(strIndex, strIndex + 2) === '..') {
      result += str.substring(strIndex + 2, strIndex + 5);
    }
    strIndex += 1;
  }

  result -= 2;
  return `${result}`;
};

export default () => {
  index.checkAnswers(index.getAnswer, getCorrectProgressAnswer, getRandomProgress, greeting);
};
