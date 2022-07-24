
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findBall(grid) {
    // m rows and n columns
    const m = grid.length; 
    const n = grid[0].length;
    const dfs = (index) => {
        let c = index;
        for(let r=0;r<m;r++) {
            if(grid[r][c] === -1 && (c === 0 || grid[r][c-1] === 1))
            {
                return -1;
            }

            if(grid[r][c] === 1 && (c === n-1 || grid[r][c+1] === -1))
            {
                return -1;
            }

            c += grid[r][c];
        }

        return c;
    }

    const ans = [];
    for (let i=0;i<n;i++) {
        const j = dfs(i);
        ans.push(j);
    }
    return ans;
}


function test(grid, expected) {
    
    const actual = findBall(grid);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1706. Where Will the Ball Fall', () => {
    it('1706. 1', () => {test( [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]],  [1,-1,-1,-1,-1])});
    it('1706. 2', () => {test( [[-1]],  [-1])});
    it('1706. 3', () => {test( [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]],  [0,1,2,3,4,-1])});
    it('1706. 4', () => {test( [[-1, -1]],  [-1, 0])});
});


/*
Runtime: 62 ms, faster than 99.28% of JavaScript online submissions for Where Will the Ball Fall.
Memory Usage: 44.7 MB, less than 38.77% of JavaScript online submissions for Where Will the Ball Fall.
*/