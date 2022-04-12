const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const rowShift = Math.trunc(k / n) % m;
    const colShift = k % n;
    //row shift
    const rows2Shift = grid.splice(-rowShift, rowShift);
    grid.unshift(...rows2Shift);
    // col shift
    let tempList = [];
    for (let r = 0; r < m; r++) {
        grid[r].unshift(...tempList);
        tempList = grid[r].splice(-colShift, colShift);
    }
    grid[0].unshift(...tempList);

    return grid;
}

function test(grid, k, expected) {
    const actual = shiftGrid(grid, k);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1260. Shift 2D Grid', () => {
    it('1260. 1', () => { test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1, [[9, 1, 2], [3, 4, 5], [6, 7, 8]]) });
    it('1260. 2', () => { test([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4, [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]) });
    it('1260. 3', () => { test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) });
});


/*
Runtime: 80 ms, faster than 98.70% of JavaScript online submissions for Shift 2D Grid.
Memory Usage: 47 MB, less than 93.51% of JavaScript online submissions for Shift 2D Grid.
*/