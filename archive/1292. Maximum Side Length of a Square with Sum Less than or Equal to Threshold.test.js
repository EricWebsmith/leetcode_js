
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
function maxSideLength(mat, threshold) {
    const m = mat.length;
    const n = mat[0].length;
    const acc = mat.map(() => new Array(n).fill(0));

    for (let c = 0; c < n; c++) {
        acc[0][c] = mat[0][c];
        for (let r = 1; r < m; r++) {
            acc[r][c] = acc[r - 1][c] + mat[r][c];
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            acc[r][c] = acc[r][c - 1] + acc[r][c]
        }
    }

    let ans = 0;

    const getArea = (r, c, w)=> {
        if (w === 1) {
            return mat[r][c];
        }
        const topLeft = (r > 0 && c > 0) ? acc[r - 1][c - 1] : 0;
        const topRight = (r > 0) ? acc[r - 1][c + w - 1] : 0;
        const bottomLeft = (c > 0) ? acc[r + w - 1][c - 1] : 0;
        const bottomRight = acc[r + w - 1][c + w - 1];
        return bottomRight - bottomLeft - topRight + topLeft;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const maxLength = Math.min(m - r, n - c);
            
            let left = 1;
            let right = maxLength;
            if(getArea(r, c, maxLength)<=threshold) {
                ans = Math.max(ans, maxLength);
                break;
            }
            while(left<right) {
                const mid = (left+right)>>1;
                if(getArea(r, c, mid)<=threshold) {
                    left = mid+1;
                } else {
                    right = mid;
                }
            }
            ans = Math.max(ans,left-1);
        }
    }

    return ans;
}


function test(mat, threshold, expected) {
    const actual = maxSideLength(mat, threshold);
    expect(actual).to.be.eql(expected);
}

describe('1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold', () => {
    it('1292. 1', () => { test([[1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2]], 4, 2) });
    it('1292. 2', () => { test([[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], 1, 0) });

});


/*
Runtime: 147 ms, faster than 75.00% of JavaScript online submissions for Maximum Side Length of a Square with Sum Less than or Equal to Threshold.
Memory Usage: 51.9 MB, less than 7.14% of JavaScript online submissions for Maximum Side Length of a Square with Sum Less than or Equal to Threshold.
*/