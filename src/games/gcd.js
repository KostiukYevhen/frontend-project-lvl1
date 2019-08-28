import { cons, car, cdr } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomIntsPair = () => {
  const firstInteger = getRandomInteger();
  const secondInteger = getRandomInteger();
  const getDivisors = cons(firstInteger, secondInteger);
  return getDivisors;
};

const findGcd = (numbers) => {
  const firstInteger = car(numbers);
  const secondInteger = cdr(numbers);
  let smallestDivisor = Math.min(firstInteger, secondInteger);

  while (smallestDivisor > 1) {
    if ((firstInteger % smallestDivisor === 0) && (secondInteger % smallestDivisor === 0)) {
      return smallestDivisor;
    }
    smallestDivisor -= 1;
  }
  return smallestDivisor;
};

const getCorrectAnswer = () => {
  const getTwoIntegers = getRandomIntsPair();
  const question = `${car(getTwoIntegers)} ${cdr(getTwoIntegers)}`;
  const correctAnswer = findGcd(getTwoIntegers);
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
