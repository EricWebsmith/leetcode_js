
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function findBestValue(arr, target) {
    
};

function test(...args) {
    const expected = args.pop();
    const actual = findBestValue (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1300. Sum of Mutated Array Closest to Target', () => {

    it('1300. 1', () => {test(,  [4,9,3],  10, 3)});
    it('1300. 2', () => {test(,  [2,3,5],  10, 5)});
    it('1300. 3', () => {test(,  [60864,25176,27249,21296,20204],  56803, 11361)});    
});

