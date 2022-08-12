
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
    
}


function test(nums, k, expected) {
    
    const actual = maxFrequency(nums, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1838. Frequency of the Most Frequent Element', () => {
    it('1838. 1', () => {test( [1,2,4], 5,  3)});
    it('1838. 2', () => {test( [1,4,8,13], 5,  2)});
    it('1838. 3', () => {test( [3,9,6], 2,  1)});
   
});
