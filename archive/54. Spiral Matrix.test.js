const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;

    let direction = 0;

    const ans = [];
    let r = top;
    let c = right;
    while (right - left > -1 && bottom - top > -1) {

        switch (direction) {
            case 0:
                r = top;
                for (c = left; c <= right; c++) {
                    ans.push(matrix[r][c]);
                }
                top++;
                break;
            case 1:
                c = right;
                for (r = top; r <= bottom; r++) {
                    ans.push(matrix[r][c]);
                }
                right--;
                break;
            case 2:
                r = bottom;
                for (c = right; c >= left; c--) {
                    ans.push(matrix[r][c]);
                }
                bottom--;
                break;
            case 3:
                c = left;
                for (r = bottom; r >= top; r--) {
                    ans.push(matrix[r][c]);
                }
                left++;
                break;
        }
        direction = (direction + 1) % 4;
    }

    return ans;
}

function test(matrix, expected) {
    const actual = spiralOrder(matrix);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('54. Spiral Matrix', () => {
    it('54. 1', () => { test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]) });
    it('54. 2', () => { test([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]) });
    it('54. 3', () => { test([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]) });
});


/*
Runtime: 48 ms, faster than 99.86% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 42 MB, less than 46.55% of JavaScript online submissions for Spiral Matrix.
*/