
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < target; i++) {
        //impossible
        if (dp[i] === 0) {
            continue;
        }

        for (const num of nums) {
            if (i + num <= target) {
                dp[i + num] = dp[i + num] + dp[i];
            }
        }
    }

    return dp[target];
}


function test(nums, target, expected) {

    const actual = combinationSum4(nums, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('377. Combination Sum IV', () => {
    it('377. 1', () => { test([1, 2, 3], 4, 7) });
    it('377. 2', () => { test([9], 3, 0) });

});

/*
Runtime: 77 ms, faster than 77.11% of JavaScript online submissions for Combination Sum IV.
Memory Usage: 44.1 MB, less than 23.37% of JavaScript online submissions for Combination Sum IV.
*/