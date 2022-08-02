
const { expect } = require("chai");

function bisectRight(a, x, lo=0, hi = a.length) {
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (a[mid]<=x) {
            lo = mid+1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

/*
 1  5  9
10 11 13
12 13 15
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    const countLe = (m) => {
        let count = 0;
        let previousLineCount = n;
        for (let i = 0; i < n; i++) {
            const lineCount = bisectRight(matrix[i], m, 0, previousLineCount);
            count+=lineCount;
            previousLineCount = lineCount;
        }
        return count;
    }

    while(left<right) {
        const mid = left + Math.floor((right - left) / 2);
        if(countLe(mid)<k) {
            left = mid+1;
        } else{
            right = mid;
        }
    }

    return left;
}

function test(matrix, k, expected) {

    const actual = kthSmallest(matrix, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('378. Kth Smallest Element in a Sorted Matrix', () => {
    it('378. 1', () => { test([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8, 13) });
    it('378. 2', () => { test([[-5]], 1, -5) });
    it('378. 3', () => { test([[-5,-4],[-5,-4]], 2, -5) });

});


/*
Runtime: 70 ms, faster than 98.45% of JavaScript online submissions for Kth Smallest Element in a Sorted Matrix.
Memory Usage: 44.9 MB, less than 88.74% of JavaScript online submissions for Kth Smallest Element in a Sorted Matrix.
*/
