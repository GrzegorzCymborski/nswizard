export const mixAndSort = (num: number) => {
  const cardsArr = [...Array(num).keys()].map((i) => i + 1);
  return [...cardsArr, ...cardsArr].sort(() => Math.random() - 0.5);
};
