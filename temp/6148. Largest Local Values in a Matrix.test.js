
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
    const n = grid.length;
    const ans = [];
    for (let i = 0; i < n - 2; i++) {
        ans.push(new Array(n - 2).fill(0));
    }

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            for (let ii = 0; ii <= 2; ii++) {
                for (let jj = 0; jj <= 2; jj++) {
                    ans[i][j] = Math.max(ans[i][j], grid[i + ii][j + jj]);
                }
            }
        }
    }

    return ans;
}


function test(grid, expected) {

    const actual = largestLocal(grid);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6148. Largest Local Values in a Matrix', () => {
    it('6148. 1', () => { test([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]], [[9, 9], [8, 6]]) });
    it('6148. 2', () => { test([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], [[2, 2, 2], [2, 2, 2], [2, 2, 2]]) });

});
