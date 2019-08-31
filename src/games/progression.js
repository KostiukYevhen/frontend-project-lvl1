import { cons } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'What number is missing in the progression?';

const getRandomProgress = () => {
  const startProgressionInt = getRandomInteger();
  const progressionStep = getRandomInteger();
  const progressionLength = 10;
  const hiddenElementPosition = getRandomInteger(1, progressionLength);
  let question = '';
  let correctAnswer;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementPosition) {
      correctAnswer = startProgressionInt + progressionStep * i;
      question += '.. ';
    } else {
      question += `${startProgressionInt + progressionStep * i} `;
    }
  }

  return cons(question.trim(), correctAnswer);
};

export default () => {
  checkAnswers(description, getRandomProgress);
};
