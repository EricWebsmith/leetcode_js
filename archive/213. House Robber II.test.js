
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function robLine(nums) {
    let a = nums[0];
    let b = nums[1];
    let c = nums[0] + nums[2];

    for (let i = 3; i < nums.length; i++) {
        const d = nums[i] + Math.max(a, b);
        a = b;
        b = c;
        c = d;
    }

    return Math.max(b, c);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    const n = nums.length;
    if (n <= 3) {
        return _.max(nums);
    }

    const last = nums.pop();
    const ans1 = robLine(nums);
    nums.shift();
    nums.push(last);
    const ans2 = robLine(nums);
    return Math.max(ans1, ans2);
}


function test(nums, expected) {

    const actual = rob(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('213. House Robber II', () => {
    it('213. 1', () => { test([2, 3, 2], 3) });
    it('213. 2', () => { test([1, 2, 3, 1], 4) });
    it('213. 3', () => { test([1, 2, 3], 3) });
    it('213. 3', () => { test([1, 2, 1, 1], 3) });

});


/*
Runtime: 63 ms, faster than 92.35% of JavaScript online submissions for House Robber II.
Memory Usage: 41.9 MB, less than 63.28% of JavaScript online submissions for House Robber II.
*/