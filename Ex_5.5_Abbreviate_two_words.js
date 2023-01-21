function capitalLetter(str) {
  let arr = str.split(" ");
  let arr2 = arr[0];
  let arr3 = arr[1];
  return arr2.slice(0, 1) + "." + arr3.slice(0, 1);
}

console.log(capitalLetter("Sam Harris"));
