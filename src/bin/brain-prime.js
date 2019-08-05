#!/usr/bin/env node
import * as index from '../index';
import getCorrectPrimeAnswer from '../games/prime';

index.greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
index.getName();

index.checkAnswers(index.getAnswer, getCorrectPrimeAnswer, index.getRandomNumber);
