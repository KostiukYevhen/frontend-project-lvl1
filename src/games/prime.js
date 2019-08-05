#!/usr/bin/env node

export default (num) => {
  let numIndex = 2;
  if (num === 1) {
    return 'yes';
  }
  while (numIndex <= num) {
    if (num % numIndex === 0) {
      if (numIndex === num) {
        return 'yes';
      }
      return 'no';
    }
    numIndex += 1;
  }
  return 'no';
};
