
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxUncrossedLines(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const dp = [];
    for (let r = 0; r <= m; r++) {
        dp.push(new Array(n + 1).fill(0));
    }

    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            if (nums1[r - 1] === nums2[c - 1]) {
                dp[r][c] = dp[r - 1][c - 1] + 1;
            } else {
                dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1]);
            }
        }
    }

    return dp[m][n];
}


function test(nums1, nums2, expected) {

    const actual = maxUncrossedLines(nums1, nums2);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1035. Uncrossed Lines', () => {
    it('1035. 1', () => { test([1, 4, 2], [1, 2, 4], 2) });
    it('1035. 2', () => { test([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2], 3) });
    it('1035. 3', () => { test([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1], 2) });

});


/*
Runtime: 101 ms, faster than 70.00% of JavaScript online submissions for Uncrossed Lines.
Memory Usage: 45.1 MB, less than 30.00% of JavaScript online submissions for Uncrossed Lines.
*/