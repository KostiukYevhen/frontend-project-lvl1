import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let smallestDivisor = Math.min(num1, num2);

  while (smallestDivisor > 1) {
    if ((num1 % smallestDivisor === 0) && (num2 % smallestDivisor === 0)) {
      return smallestDivisor;
    }
    smallestDivisor -= 1;
  }
  return smallestDivisor;
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
