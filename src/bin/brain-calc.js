#!/usr/bin/env node
import * as index from '../index';
import * as calc from '../games/calc';

index.greeting();
console.log('What is the result of the expression?\n');
index.getName();
index.checkAnswers(index.getAnswer, calc.getCorrectExpressionAnswer, calc.getRandomExpression);
