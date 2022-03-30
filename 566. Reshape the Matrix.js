/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (!mat[0] || r == m || m * n !== r * c) {
        return mat;
    }

    let ans = [];

    for (let i = 0; i < r; i++) {
        let current = [];
        for (let j = 0; j < c; j++) {
            const order = i * c + j;
            const row = Math.floor(order / n);
            const col = order % n;
            const v = mat[row][col];
            current.push(v);
        }
        ans.push(current);
    }

    return ans;
};

function test(mat, r, c) {
    const ans = matrixReshape(mat, r, c);
    console.log(ans);
}

test(mat = [[1, 2], [3, 4]], r = 1, c = 4)
test(mat = [[1, 2], [3, 4]], r = 2, c = 4)
test(mat = [[1, 2], [3, 4]], r = 4, c = 1)