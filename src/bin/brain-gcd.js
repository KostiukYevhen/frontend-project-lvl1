#!/usr/bin/env node
import * as index from '../index';
import * as gcd from '../games/gcd';

index.greeting();
console.log('Find the greatest common divisor of given numbers.\n');
index.getName();

index.checkAnswers(index.getAnswer, gcd.getCorrectDivisorAnswer, gcd.getRandomDivisor);
