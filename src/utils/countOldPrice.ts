const countOldPrice = (price: number, percentage: number) => {
  return Math.round((price / (100 - percentage)) * 100);
};

export default countOldPrice;
