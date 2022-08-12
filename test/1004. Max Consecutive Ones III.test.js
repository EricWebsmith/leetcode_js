
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    
}


function test(nums, k, expected) {
    
    const actual = longestOnes(nums, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1004. Max Consecutive Ones III', () => {
    it('1004. 1', () => {test( [1,1,1,0,0,0,1,1,1,1,0], 2,  6)});
    it('1004. 2', () => {test( [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3,  10)});
   
});
