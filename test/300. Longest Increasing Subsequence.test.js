
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {number[]} array 
 * @param {number} x 
 */
function bisectLeft(array, x) {
    let l = 0;
    let r = array.length;
    while (l < r) {
        const mid = (l + r) >>> 1;
        if (array[mid] < x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS_(nums) {
    const n = nums.length;
    const ans = [nums[0]];
    for (let i = 1; i < n; i++) {
        if (nums[i] > ans[ans.length - 1]) {
            ans.push(nums[i]);
        }
        else {
            const insertPos = bisectLeft(ans, nums[i]);
            if (insertPos < ans.length) {
                ans[insertPos] = nums[i];
            }
        }
    }

    return ans.length;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return _.max(dp);
}


function test(nums, expected) {

    const actual = lengthOfLIS(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('300. Longest Increasing Subsequence', () => {
    it('300. 1', () => { test([10, 9, 2, 5, 3, 7, 101, 18], 4) });
    it('300. 2', () => { test([0, 1, 0, 3, 2, 3], 4) });
    it('300. 3', () => { test([7, 7, 7, 7, 7, 7, 7], 1) });

});
