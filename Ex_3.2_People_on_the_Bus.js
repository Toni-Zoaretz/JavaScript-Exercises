function countPeoplOnTheBus(arr) {
  let count = 0;
  arr.forEach((el) => {
    count += el[0] - el[1];
  });

  return count;
}

console.log(
  countPeoplOnTheBus([
    [2, 0],
    [3, 1],
    [2, 1],
  ])
);
