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
  const currentRound = 0;
  const finalRound = 3;
  const counter = (start) => {
    if (start === finalRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const isCorrect = startStage(stage());
    if (isCorrect) {
      counter(start + 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };
  counter(currentRound);
};
