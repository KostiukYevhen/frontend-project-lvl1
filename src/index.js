import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const startRound = 0;
const finalRound = 3;

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const startStage = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isCorrect = correctAnswer === userAnswer;
  const output = isCorrect ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(output);
  return isCorrect;
};

export default (description, stage) => {
  const userName = greeting(description);
  const counter = (currentRound) => {
    if (currentRound === finalRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameData = stage();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const isCorrect = startStage(question, correctAnswer);
    if (isCorrect) {
      counter(currentRound + 1);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  };
  counter(startRound);
};
