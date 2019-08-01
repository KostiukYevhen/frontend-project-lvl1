#!/usr/bin/env node
import * as index from '../../index';

index.greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
index.getName();

index.checkAnswers(index.getAnswer, index.getCorrectPrimeAnswer, index.getRandomNumber);
