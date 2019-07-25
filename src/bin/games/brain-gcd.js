#!/usr/bin/env node
import * as index from '../../index';

index.greeting();
console.log('Find the greatest common divisor of given numbers.\n');
index.getName();

index.checkAnswers(index.getAnswer, index.getCorrectDivisorAnswer, index.getRandomDivisor);
