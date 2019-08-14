import readlineSync from 'readline-sync';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
  return userAnswer;
};

export const checkAnswers = (correct, func, description) => {
  const userName = greeting(description);
  let startCount = 0;
  const endCount = 3;

  while (startCount < endCount) {
    const randomValue = func();
    const userAnswer = getAnswer(randomValue);
    const correctAnswer = correct(randomValue);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    startCount += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default checkAnswers;
