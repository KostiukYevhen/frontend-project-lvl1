import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let divisor = 2;
  if (num === 1) {
    return true;
  }
  while (divisor <= num) {
    if (num % divisor === 0) {
      return divisor === num;
    }
    divisor += 1;
  }
  return false;
};

const getCorrectAnswer = () => {
  const randomInteger = getRandomInteger();
  const correctAnswer = isPrime(randomInteger) ? 'yes' : 'no';
  const question = String(randomInteger);

  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
