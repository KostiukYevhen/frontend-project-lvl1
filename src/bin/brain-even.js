#!/usr/bin/env node
import * as index from '../index';
import getCorrectRandomAnswer from '../games/even';

index.greeting();
console.log('Answer "yes" if number even otherwise answer "no".\n');
index.getName();
index.checkAnswers(index.getAnswer, getCorrectRandomAnswer, index.getRandomNumber);
