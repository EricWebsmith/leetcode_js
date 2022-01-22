/*
we make a m by n matrix
to restore if text1[i] and text2[j] are identical.

for Example 1:
Input: text1 = "abcde", text2 = "ace" 

  a b c d e
a 1 0 0 0 0
c 0 0 1 0 0
e 0 0 0 0 1

*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  // building matrix
  let matrix = new Array(n + 1);
  for (let y = 0; y <= n; y++) {
    matrix[y] = new Array(m + 1);
    for (let x = 0; x <= m; x++) {
      if (y>0 && x>0 && text1[x-1] === text2[y-1]) {
        matrix[y][x] = 1;
      }
      else{
        matrix[y][x] = 0;
      }
    }
  }

//  console.log(matrix);

  // build dp from matrix
  for(let y = 1; y <= n; y++){

    for(let x = 1; x <= m; x++){
      if(matrix[y][x] === 1){
        matrix[y][x] = Math.max(matrix[y-1][x], matrix[y][x-1], matrix[y-1][x-1] + 1);
      }
      else{
        matrix[y][x] = Math.max(matrix[y-1][x], matrix[y][x-1]);
      }
    }
  }
  //console.log(matrix);

  return matrix[n][m];
};

let test = (text1, text2, expected) => {
    let actual = longestCommonSubsequence(text1, text2);
    console.log(`${actual===expected} expected: ${expected} actual: ${actual}`);
};


test("abcde", "ace", 3);
test("a", "abc", 1);

test("abcba", "abcbcba", 5);
test("bsbim", "jmjkbk", 1);
test("bsbininm", "jmjkbkjkv", 1);
test("abcde", "ace", 3);
test("abc", "def", 0);
test("abc", "abc", 3);
test("b", "b", 1);
test("b", "cd", 0);
test("ezupkr", "ubmrapg", 2);

