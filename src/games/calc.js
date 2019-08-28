import { cons, car, cdr } from '@hexlet/pairs';
import checkAnswers from '..';
import getRandomInteger from '../utils';

const description = 'What is the result of the expression?';

const getCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInteger(0, operators.length - 1);
  const expression = cons(getRandomInteger(), cons(operators[operatorIndex], getRandomInteger()));
  const leftSide = car(expression);
  const rightSide = cdr(cdr(expression));
  const operator = car(cdr(expression));
  const question = `${leftSide} ${operator} ${rightSide}`;
  let correctAnswer = '';

  switch (operator) {
    case '+':
      correctAnswer = leftSide + rightSide;
      break;
    case '-':
      correctAnswer = leftSide - rightSide;
      break;
    case '*':
      correctAnswer = leftSide * rightSide;
      break;
    default:
      break;
  }
  return cons(question, correctAnswer);
};

export default () => {
  checkAnswers(description, getCorrectAnswer);
};
