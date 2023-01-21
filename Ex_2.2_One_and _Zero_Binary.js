function convertBinary(arr) {
  const arrToStr = arr.join("");
  return parseInt(arrToStr, 2);
}

console.log(convertBinary([0, 0, 0, 1]));
