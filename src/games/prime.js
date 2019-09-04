import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      return num === i;
    }
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
