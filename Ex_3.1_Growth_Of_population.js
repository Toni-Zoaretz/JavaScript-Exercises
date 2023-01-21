function nb_year(p0, precent, aug, p) {
  let count = 0;
  let i = 0;
  while (p0 < p) {
    count++;
    p0 = (p0 * precent) / 100 + aug + p0;
  }
  return count;
}

console.log(nb_year(1500, 5, 100, 5000)); //1070
