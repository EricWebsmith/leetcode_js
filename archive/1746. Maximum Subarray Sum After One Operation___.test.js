
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSumAfterOperation(nums) {
    const n= nums.length;
    nums.sort();
    let ans = _.sum(nums);
    let diff = nums[0] * nums[0] - nums[0];
    diff = Math.max(diff, nums[n-1] ** 2 - nums[n-1]);
    return ans + diff;
};

function test(...args) {
    const expected = args.pop();
    const actual = maxSumAfterOperation (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1746. Maximum Subarray Sum After One Operation', () => {

    it.only('1746. 1', () => {test([2,-1,-4,-3], 17)});
    it('1746. 2', () => {test([1,-1,1,1,-1,-1,1], 4)});    
});

