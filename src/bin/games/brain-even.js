#!/usr/bin/env node
import * as index from '../../index';

index.greeting();
console.log('Answer "yes" if number even otherwise answer "no".\n');
index.getName();
index.checkAnswers(index.getAnswer, index.getCorrectAnswer, index.getRandomNumber);
