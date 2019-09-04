import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let biggestDivisor = Math.min(num1, num2);

  while (biggestDivisor > 1) {
    if ((num1 % biggestDivisor === 0) && (num2 % biggestDivisor === 0)) {
      return biggestDivisor;
    }
    biggestDivisor -= 1;
  }
  return biggestDivisor;
};

const getCorrectAnswer = () => {
  const firstRandomInteger = getRandomInteger();
  const secondRandomInteger = getRandomInteger();
  const question = `${firstRandomInteger} ${secondRandomInteger}`;
  const correctAnswer = findGcd(firstRandomInteger, secondRandomInteger);
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
