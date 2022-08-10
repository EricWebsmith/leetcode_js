
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} costs
 * @return {number}
 */
function minCost(costs) {
    const n = costs.length;
    let current = costs[0]
    for (let i = 1;i<n;i++) {
        const newCurrent = [];
        newCurrent[0] = costs[i][0] + Math.min(current[1], current[2]);
        newCurrent[1] = costs[i][1] + Math.min(current[0], current[2]);
        newCurrent[2] = costs[i][2] + Math.min(current[0], current[1]);
        current = newCurrent;
    }
    return _.min(current);
}

function test(...args) {
    const expected = args.pop();
    const actual = minCost (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('256. Paint House', () => {

    it('256. 1', () => {test([[17,2,17],[16,16,5],[14,3,19]], 10)});
    it('256. 2', () => {test([[7,6,2]], 2)});    
});

/*
Runtime: 70 ms, faster than 92.61% of JavaScript online submissions for Paint House.
Memory Usage: 44.4 MB, less than 38.07% of JavaScript online submissions for Paint House.
*/