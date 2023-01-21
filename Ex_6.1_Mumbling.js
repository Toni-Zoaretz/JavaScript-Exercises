// ("abcd") => "A-Bbb-Ccc-Dddd";
// ("RqaEzty") => "R-Qq-Aaa-Eeee-Yyyyy";
// ("cwAt") => "C-Ww-Aaa-Tttt";

function accum(str) {
  let result1 = "";
  let result2 = "";
  for (let i = 0; i < str.length; i++) {
    result1 += str.charAt(i).toUpperCase() + "-";
  }

  let count = 1;
  for (let i = 0; i < result1.length; i++) {
    result1 += result1.charAt(i).repeat(str.length);
  }

  return result1;
}

console.log(accum("abcd")); //1*2*3*4*5 == 120
