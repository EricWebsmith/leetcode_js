
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
function lengthOfLIS(nums) {
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


/*
Runtime: 87 ms, faster than 93.25% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 43.1 MB, less than 92.44% of JavaScript online submissions for Longest Increasing Subsequence.
*/