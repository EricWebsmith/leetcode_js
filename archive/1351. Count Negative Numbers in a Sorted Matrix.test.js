const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let lastPositive = n-1;
    let ans = 0;
    for(let r=0;r<m;r++){
        while(grid[r][lastPositive]<0){
            lastPositive--;
        }
        ans+=n-lastPositive-1;
    }
    return ans;
}

function test(expected, ...args) {
    const actual = countNegatives (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1351. Count Negative Numbers in a Sorted Matrix', () => {
    it('1351. 1', () => {test(8, [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])});
    it('1351. 2', () => {test(0, [[3,2],[1,0]])});
    //it('3', () => {test()});
});


/*
Runtime: 61 ms, faster than 92.73% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 44 MB, less than 58.51% of JavaScript online submissions for Count Negative Numbers in a Sorted 
*/