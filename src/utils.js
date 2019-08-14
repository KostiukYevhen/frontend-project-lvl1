const getRandomInteger = (min = 1, max = 100) => {
  const randomInt = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomInt);
};

export default getRandomInteger;
