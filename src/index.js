import readlineSync from 'readline-sync';

let userName;
let userAnswer = '';
let correctAnswer = '';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!\n`);
};

export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getAnswer = (num) => {
  userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return userAnswer === correctAnswer;
};

export const checkAnswers = () => {
  if (getAnswer(getRandomNumber())) {
    console.log('Correct!');
    if (getAnswer(getRandomNumber())) {
      console.log('Correct!');
      if (getAnswer(getRandomNumber())) {
        console.log('Correct!');
        return console.log(`Congratulations, ${userName}!`);
      }
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};
