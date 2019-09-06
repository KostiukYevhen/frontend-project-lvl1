import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return num === i;
    }
  }
  return true;
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
