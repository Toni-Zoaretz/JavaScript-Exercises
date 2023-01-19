function summation(num) {
  let result = 0;
  for (let i = num; i > 0; i--) {
    result = result + num;
    num--;
  }

  return result;
}

console.log(summation(8));
