
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
    const ans = [];
    for (const [qx, qy, r] of queries) {
        let count = 0;
        for (const [px, py] of points) {
            const distance = (qx-px) ** 2 + (qy-py) ** 2;
            const range = r ** 2;
            if (distance<=range) {
                count++;
            }
        }
        ans.push(count);
    }

    return ans;
}


function test(points, queries, expected) {
    
    const actual = countPoints(points, queries);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1828. Queries on Number of Points Inside a Circle', () => {
    it('1828. 1', () => {test( [[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]],  [3,2,2])});
    it('1828. 2', () => {test( [[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]],  [2,3,2,4])});
   
});


/*
Runtime: 122 ms, faster than 94.69% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
Memory Usage: 45.1 MB, less than 55.07% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
*/