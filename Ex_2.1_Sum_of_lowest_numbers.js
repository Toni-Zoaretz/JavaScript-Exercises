function sumOftwoLowest(arr) {
  const sumLoweste = [];
  const sorteArray = arr.sort((a, b) => a - b);
  sumLoweste.push(sorteArray[0] + sorteArray[1]);
  return sumLoweste;
}

console.log(sumOftwoLowest([10, 343445353, 3453445, 3453545353453]));
