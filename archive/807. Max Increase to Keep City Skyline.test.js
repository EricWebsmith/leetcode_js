
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxIncreaseKeepingSkyline(grid) {
    const n = grid.length;
    const rowMax = []
    for (let r = 0;r<n;r++) {
        rowMax.push(_.max(grid[r]));
    }

    const colMax = [];
    for(let c = 0;c<n;c++) {
        let localMax = grid[0][c];
        for (let r=1;r<n;r++) {
            localMax = Math.max(localMax, grid[r][c]);
        }
        colMax.push(localMax);
    }

    let ans = 0;
    for (let r=0;r<n;r++) {
        for(let c=0;c<n;c++) {
            const constraint = Math.min(rowMax[r], colMax[c]);
            ans += constraint - grid[r][c];
        }
    }

    return ans;
}


function test(grid, expected) {
    
    const actual = maxIncreaseKeepingSkyline(grid);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('807. Max Increase to Keep City Skyline', () => {
    it('807. 1', () => {test( [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]],  35)});
    it('807. 2', () => {test( [[0,0,0],[0,0,0],[0,0,0]],  0)});
   
});


/*
Runtime: 72 ms, faster than 95.20% of JavaScript online submissions for Max Increase to Keep City Skyline.
Memory Usage: 42.6 MB, less than 87.20% of JavaScript online submissions for Max Increase to Keep City Skyline.
*/