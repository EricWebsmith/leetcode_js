const { expect } = require("chai");

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const t = [];
    for (let r = 0; r < n; r++) {
        const row = [];
        for (let c = 0; c < m; c++) {
            row.push(matrix[c][r]);
        }
        t.push(row);
    }
    return t;

}

function test(...args) {
    const expected = args.pop();
    const actual = transpose(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('867. Transpose Matrix', () => {
    it('867. 1', () => { test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 4, 7], [2, 5, 8], [3, 6, 9]]) });
    it('867. 2', () => { test([[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]]) });
    it('867. 3', () => { test([[1, 2], [3, 4]], [[1, 3], [2, 4]]) });
});


/*
Runtime: 68 ms, faster than 98.44% of JavaScript online submissions for Transpose Matrix.
Memory Usage: 45 MB, less than 30.00% of JavaScript online submissions for Transpose Matrix.
*/