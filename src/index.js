import readlineSync from 'readline-sync';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getRandomNumber = () => Math.round(Math.random() * 100) + 1;

export const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return userAnswer;
};

export const checkAnswers = (answer, correct, func, description) => {
  const userName = greeting(description);
  let startCount = 0;

  while (startCount < 3) {
    const randomValue = func();
    const userAnswer = answer(randomValue);
    const correctAnswer = correct(randomValue);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    startCount += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
