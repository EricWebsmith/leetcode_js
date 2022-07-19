
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function numberOfPairs(nums) {
    const set = new Set();
    let pairs = 0;
    for(const num of nums) {
        if (set.has(num)) {
            pairs++;
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return [pairs, nums.length-pairs * 2];
};

function test(...args) {
    const expected = args.pop();
    const actual = numberOfPairs (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6120. Maximum Number of Pairs in Array', () => {

    it('6120. 1', () => {test([1,3,2,1,3,2,2], [3,1])});
    it('6120. 2', () => {test([1,1], [1,0])});
    it('6120. 3', () => {test([0], [0,1])});    
});

