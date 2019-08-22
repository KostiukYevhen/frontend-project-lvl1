import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const startStage = (answers) => {
  console.log(`Question: ${car(answers)}`);
  const correctAnswer = String(cdr(answers));
  const userAnswer = readlineSync.question('Your answer: ');
  const isCorrect = correctAnswer === userAnswer;
  const output = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(output);
  return isCorrect;
};

export default (description, stage) => {
  const userName = greeting(description);
  let startCount = 0;
  const endCount = 3;
  const counter = (start) => {
    if (start === endCount) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const isCorrect = startStage(stage());
    if (isCorrect) {
      return counter(start + 1);
    }
    startCount += 1;
    return console.log(`Let's try again, ${userName}!`);
  };
  return counter(startCount);
};
