#!/usr/bin/env node
import * as index from '../../index';

index.greeting();
console.log('What is the result of the expression?\n');
index.getName();

index.checkAnswers(index.getAnswer, index.getCorrectExpressionAnswer, index.getRandomExpression);
