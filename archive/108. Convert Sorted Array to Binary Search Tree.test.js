
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums, l=0, r=nums.length-1) {
    const n = r - l + 1;
    if (n === 0) { return null; }
    if ( n === 1) { return new TreeNode(nums[r]); }
    const mid = Math.ceil((l+r)/2);

    const root = new TreeNode(nums[mid]);
    root. left = sortedArrayToBST(nums, l, mid-1);
    root.right = sortedArrayToBST(nums, mid+1, r);

    return root;
}


function test(nums, expected) {
    
    const actualHead = sortedArrayToBST(nums);
    const actual = treeNode2Array(actualHead)
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('108. Convert Sorted Array to Binary Search Tree', () => {
    it('108. 1', () => {test( [-10,-3,0,5,9],  [0,-3,9,-10,null,5])});
    it('108. 2', () => {test( [1,3],  [3,1])});
   
});
