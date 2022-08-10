
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

const MAX_COST = 20 * 100;

/**
 * 
 * @param {number[]} arr 
 * @param {number} e 
 */
function minExcept(arr, e) {
    let ans = MAX_COST;
    for (let i = 0; i < arr.length; i++) {
        if (i === e) {
            continue;
        }

        ans = Math.min(ans, arr[i])
    }

    return ans;
}

/**
 * @param {number[][]} costs
 * @return {number}
 */
function minCostII(costs) {
    const n = costs.length;
    const k = costs[0].length;
    let previous = costs[0];
    for (let i = 1; i < n; i++) {
        const current = new Array(k);
        for (let j = 0; j < k; j++) {
            current[j] = costs[i][j] + minExcept(previous, j);
        }
        previous = current;
    }

    return _.min(previous);
}

function test(...args) {
    const expected = args.pop();
    const actual = minCostII(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('265. Paint House II', () => {

    it('265. 1', () => { test([[1, 5, 3], [2, 9, 4]], 5) });
    it('265. 2', () => { test([[1, 3], [2, 4]], 5) });
    it('265. 3', () => { test([[10, 15, 12, 14, 18, 5], [5, 12, 18, 13, 15, 8], [4, 7, 4, 2, 10, 18], [20, 9, 9, 19, 20, 5], [10, 15, 10, 15, 16, 20], [9, 6, 11, 10, 12, 11], [7, 10, 6, 12, 20, 8], [3, 4, 4, 18, 10, 2]], 41) });
});

/*
Runtime: 62 ms, faster than 100.00% of JavaScript online submissions for Paint House II.
Memory Usage: 44.7 MB, less than 75.31% of JavaScript online submissions for Paint House II.
*/