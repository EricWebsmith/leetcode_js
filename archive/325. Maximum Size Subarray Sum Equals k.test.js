const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxSubArrayLen(nums, k) {
    const n = nums.length;
    const acc = [nums[0]];
    const map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < n; i++) {
        const value = nums[i] + acc[i - 1];
        acc.push(value);
        map.set(value, i);
    }

    let ans = 0;
    if (acc[0] === k) { ans = 1; }
    for (let i = 0; i < n; i++) {
        if (acc[i] === k) {
            ans = Math.max(i + 1, ans);
        }
        const target = acc[i] + k;
        if (map.has(target)) {
            ans = Math.max(map.get(target) - i, ans);
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = maxSubArrayLen(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('325. Maximum Size Subarray Sum Equals k', () => {
    it('325. 1', () => { test([1, -1, 5, -2, 3], 3, 4) });
    it('325. 2', () => { test([-2, -1, 2, 1], 1, 2) });
    it('325. 3', () => { test([1, 2, 3, 4, 5], 10, 4) });
    it('325. 4', () => { test([0, 1, 2, 3, 4, 5], 10, 5) });
});


/*
Runtime: 134 ms, faster than 80.00% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.
Memory Usage: 75.6 MB, less than 62.76% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.
*/