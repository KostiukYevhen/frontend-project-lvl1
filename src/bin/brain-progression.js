#!/usr/bin/env node
import * as index from '../index';
import * as progress from '../games/progression';

index.greeting();
console.log('What number is missing in the progression?\n');
index.getName();

index.checkAnswers(index.getAnswer, progress.getCorrectProgressAnswer, progress.getRandomProgress);
