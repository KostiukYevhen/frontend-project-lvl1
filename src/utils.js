const getRandomInteger = (min = 1, max = 100) => {
  const randomInteger = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomInteger);
};

export default getRandomInteger;
