
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxFrequency(nums, k) {
    nums.sort((a, b)=>a-b);
    const n = nums.length;
    let l = 0;
    let r = 0;
    let windowSum = nums[0];
    let targetSum = nums[0];
    let ans = 1;

    while (r < n ) {
        if (targetSum - windowSum <= k) {
            ans = Math.max(ans, r - l + 1);
            r++;
            // may be out of boundary, but it is accepted in Javascript
            windowSum += nums[r];
        } else {
            l++;
            windowSum -= nums[l - 1];
        }
        targetSum = (r - l + 1) * nums[r];
    }

    return ans;

}


function test(nums, k, expected) {

    const actual = maxFrequency(nums, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1838. Frequency of the Most Frequent Element', () => {
    it('1838. 1', () => { test([1, 2, 4], 5, 3) });
    it('1838. 2', () => { test([1, 4, 8, 13], 5, 2) });
    it('1838. 3', () => { test([3, 9, 6], 2, 1) });
});


/*
Runtime: 242 ms, faster than 99.16% of JavaScript online submissions for Frequency of the Most Frequent Element.
Memory Usage: 56.4 MB, less than 93.28% of JavaScript online submissions for Frequency of the Most Frequent Element.
*/