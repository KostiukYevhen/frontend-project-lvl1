import readlineSync from 'readline-sync';

let userName = '';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getRandomNumber = () => Math.round(Math.random() * 100) + 1;

export const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return userAnswer;
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
