import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'What number is missing in the progression?';

const getRandomProgress = () => {
  let startProgressionInt = getRandomInteger();
  const progressionStep = getRandomInteger();
  const hiddenElementPosition = getRandomInteger(1, 10);
  const progressionLength = 10;
  let question = '';
  let counter = 1;
  let correctAnswer;

  while (counter <= progressionLength) {
    if (counter === hiddenElementPosition) {
      correctAnswer = startProgressionInt + progressionStep;
      question += '.. ';
    } else {
      question += `${startProgressionInt + progressionStep} `;
    }
    startProgressionInt += progressionStep;
    counter += 1;
  }
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getRandomProgress);
};
