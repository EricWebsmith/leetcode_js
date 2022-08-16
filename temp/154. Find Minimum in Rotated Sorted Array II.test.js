
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    const n = nums.length;
    if (nums[0] < nums[n-1]) {
        return nums[0];
    }

    let l=0;
    let r = n-1;
    // remove duplicates
    while(nums[r] === nums[n-1]) {
        r--;
    }
    // keep the one of the duplicates
    // this duplicate may be the minimum
    if (nums[r] !== nums[n-1]) {
        r++;
    }
    while(l<r) {
        const mid =(l+r)>>1;
        if(nums[mid] >= nums[n-1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return nums[l];
}


function test(nums, expected) {
    
    const actual = findMin(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('154. Find Minimum in Rotated Sorted Array II', () => {
    it('154. 1', () => {test( [1,3,5],  1)});
    it('154. 2', () => {test( [2,2,2,0,1],  0)});
    it('154. 3', () => {test( [4,5,6,7,0,1,4],  0)});
    it('154. 4', () => {test( [10,1,10,10,10],  1)});
    it('154. 5', () => {test( [3,1],  1)});
   
});


/*
Runtime: 67 ms, faster than 89.11% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
Memory Usage: 42.4 MB, less than 44.99% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
*/