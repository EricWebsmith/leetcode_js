
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
    const n = nums.length;
    let l = 0;
    let r = 0;
    let zeros = nums[0] === 0?1:0;

    let ans = 0;
    while(r<n) {
        if (zeros<=k) {
            r++;
            if(nums[r] === 0) {
                zeros++;
            }
        } else if (zeros > k) {
            ans = Math.max(ans, r - l);
            while(nums[l] === 1) {
                l++;
            }

            zeros--;
            l++;
        }
    }

    ans = Math.max(ans, r - l);

    return ans;
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
    it('1004. 3', () => {test( [0,0,0,1], 4,  4)});
   
});

/*
Runtime: 78 ms, faster than 91.51% of JavaScript online submissions for Max Consecutive Ones III.
Memory Usage: 47.4 MB, less than 21.89% of JavaScript online submissions for Max Consecutive Ones III.
*/