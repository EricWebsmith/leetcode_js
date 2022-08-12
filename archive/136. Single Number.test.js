
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let ans = 0;
    for (const num of nums) {
        ans = ans ^ num;
    }
    return ans;
}


function test(nums, expected) {
    
    const actual = singleNumber(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('136. Single Number', () => {
    it('136. 1', () => {test( [2,2,1],  1)});
    it('136. 2', () => {test( [4,1,2,1,2],  4)});
    it('136. 3', () => {test( [1],  1)});
   
});


/*
Runtime: 75 ms, faster than 92.45% of JavaScript online submissions for Single Number.
Memory Usage: 44.6 MB, less than 68.10% of JavaScript online submissions for Single Number.
*/