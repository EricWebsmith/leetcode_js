
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob_dp(nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }

    const dp = new Array(n).fill(-1);
    dp[0] = nums[0];
    dp[1] = nums[1];
    dp[2] = nums[2] + nums[0];
    for (let i = 3; i < n; i++) {
        dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
    }
    return Math.max(dp[n - 1], dp[n - 2]);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    const n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }

    let a = nums[0];
    let b = nums[1];
    let c = nums[2] + nums[0];
    for (let i=3;i<n;i++) {
        let d = nums[i] + Math.max(a, b);
        a = b;
        b = c;
        c = d;
    }
    return Math.max(b, c);
}


function test(nums, expected) {

    const actual = rob(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('198. House Robber', () => {
    it('198. 1', () => { test([1, 2, 3, 1], 4) });
    it('198. 2', () => { test([2, 7, 9, 3, 1], 12) });

});


/*
Runtime: 54 ms, faster than 99.11% of JavaScript online submissions for House Robber.
Memory Usage: 41.6 MB, less than 93.12% of JavaScript online submissions for House Robber.
*/