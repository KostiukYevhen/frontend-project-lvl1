#!/usr/bin/env node
import * as index from '../../index';

index.greeting();
console.log('What number is missing in the progression?\n');
index.getName();

index.checkAnswers(index.getAnswer, index.getCorrectProgressionAnswer, index.getRandomProgression);
