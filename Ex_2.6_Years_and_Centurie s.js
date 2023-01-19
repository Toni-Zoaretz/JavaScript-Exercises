function century(num) {
  if (num >= 1 && num <= 100) {
    return 1;
  }
  if (num % 100 === 0 && num <= 900) {
    return num / 100;
  } else if (!num % 100 === 0 && num <= 900) {
    return Math.round(num / 100) + 1;
  }
  if (num >= 901 && num <= 1000) {
    return 10;
  }
  if (num % 1000 === 0) {
    return num / 100;
  } else if (!num % 1000 === 0) {
    return Math.round(num / 100) + 1;
  }
}

console.log(century(100));
