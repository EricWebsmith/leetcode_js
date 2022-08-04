
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    
}


function test(intervals, newInterval, expected) {
    
    const actual = insert(intervals, newInterval);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('57. Insert Interval', () => {
    it('57. 1', () => {test( [[1,3],[6,9]], [2,5],  [[1,5],[6,9]])});
    it('57. 2', () => {test( [[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8],  [[1,2],[3,10],[12,16]])});
   
});
