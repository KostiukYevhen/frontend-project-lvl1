import readlineSync from 'readline-sync';

// GREETING
let userName = '';
export const greeting = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  return userName;
};

// RANDOM OPERATOR/OPERANDS
export const getRandomNumber = () => Math.round(Math.random() * 100) + 1;

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.round(Math.random() * 2);

  const expression = `${getRandomNumber()} ${operators[operatorIndex]} ${getRandomNumber()}`;

  return expression;
};

export const getRandomDivisor = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  return `${firstNum} ${secondNum}`;
};

export const getRandomProgression = () => {
  let start = Math.round(Math.random() * (80 - 10) + 10);
  const randomNum = Math.round(Math.random() * 8);
  const step = 2;
  let result = '';
  let index = 0;

  while (index < 10) {
    if (index === randomNum) {
      result += '.. ';
    } else {
      result += `${start + step} `;
    }
    start += step;
    index += 1;
  }

  return result;
};

// GET CORRECT ANSWERS
export const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return userAnswer;
};

export const getCorrectRandomAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

export const getCorrectExpressionAnswer = (num) => {
  let index = 0;
  let leftSide = '';
  let rightSide = '';
  let result = '';

  while (index < num.length) {
    if (num[index] === ' ' && leftSide === '') {
      leftSide = num.substring(0, index);
    }
    if (num[index] === ' ') {
      rightSide = num.substring(index);
    }
    index += 1;
  }

  while (index > 0) {
    if (num[index] === '+') {
      result += +leftSide + +rightSide;
    }
    if (num[index] === '-') {
      result += +leftSide - +rightSide;
    }
    if (num[index] === '*') {
      result += +leftSide * +rightSide;
    }
    index -= 1;
  }

  return result;
};

export const getCorrectDivisorAnswer = (num) => {
  let index = 0;
  let firstNum = '';
  let secondNum = '';

  while (index < num.length) {
    if (num[index] === ' ' && firstNum === '') {
      firstNum = num.substring(0, index);
    }
    if (num[index] === ' ') {
      secondNum = num.substring(index + 1);
    }
    index += 1;
  }

  let smallestDivisor = firstNum > secondNum ? secondNum : firstNum;

  while (smallestDivisor > 1) {
    if ((firstNum % smallestDivisor === 0) && (secondNum % smallestDivisor === 0)) {
      return smallestDivisor.toString();
    }
    smallestDivisor -= 1;
  }
  return '1';
};

export const getCorrectProgressionAnswer = (str) => {
  let index = 0;
  let result = '';
  while (index < str.length - 1) {
    if (str.substring(index, index + 2) === '..') {
      result += str.substring(index + 2, index + 5);
    }
    index += 1;
  }

  result -= 2;
  return `${result}`;
};

export const getCorrectPrimeAnswer = (num) => {
  let index = 2;
  if (num === 1) {
    return 'yes';
  }
  while (index <= num) {
    if (num % index === 0) {
      if (index === num) {
        return 'yes';
      }
      return 'no';
    }
    index += 1;
  }
  return 'no';
};

// CHECK ANSWERS

export const checkAnswers = (answer, correct, func, counter = 0) => {
  const randomValue = func();
  if (counter < 3) {
    const userAnswer = answer(randomValue);
    const correctAnswer = correct(randomValue);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return checkAnswers(answer, correct, func, counter + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};
