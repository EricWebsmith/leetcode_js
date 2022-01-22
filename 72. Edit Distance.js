/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let matrix = new Array(n + 1);
    for (let y = 0; y <= n; y++) {
        matrix[y] = new Array(m + 1);
        for(let x = 0; x <= m; x++) {
            if(x === 0){
                matrix[y][x] = y;
            }
            else if(y===0){
                matrix[y][x] = x;
            }
            else if(word1[x - 1] === word2[y - 1]){
                matrix[y][x] = matrix[y-1][x-1]
            }
            else{
                matrix[y][x] = Math.min(matrix[y-1][x-1], matrix[y][x-1], matrix[y-1][x]) + 1
            }
        }
    }
    return matrix[n][m];
};

const test = (text1, text2, expected) => {
    let actual = minDistance(text1, text2);
    console.log(`${actual === expected}, ${expected}, ${actual}`);
}

test("horse", "ros", 3);
test("intention", "execution", 5);
test("intention", "intention", 0);
test("intention", "", 9);
test("", "intention", 9);