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

// ANSWERS
export const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return userAnswer;
};

export const getCorrectAnswer = (num) => {
  if (Number.isInteger(num)) {
    return num % 2 === 0 ? 'yes' : 'no';
  }

  let index = 0;
  let leftSide = '';
  let rightSide = '';
  let result = '';
  while (index < num.length / 2) {
    if (num[index] === ' ') {
      leftSide = num.substring(0, index);
    }
    index += 1;
  }
  index = num.length - 1;
  while (index > (num.length - 1) / 2) {
    if (num[index] === ' ') {
      rightSide = num.substring(index + 1);
    }
    index -= 1;
  }

  index = 0;
  while (index < num.length - 1) {
    if (num[index] === '+') {
      result += +leftSide + +rightSide;
    }
    if (num[index] === '-') {
      result += +leftSide - +rightSide;
    }
    if (num[index] === '*') {
      result += +leftSide * +rightSide;
    }
    index += 1;
  }

  return result;
};

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
