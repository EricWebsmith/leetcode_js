
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function validPartition(nums) {
    const n = nums.length;
    if (n===2) {
        return nums[0]===nums[1];
    }

    const sameArray = new Array(n).fill(0);
    const increaseArray = new Array(n).fill(0);
    for (let i=1;i<n;i++) {
        // const same = nums[i] === nums[i-1];
        // const increasing = nums[i] === nums[i-1]+1;
        if (nums[i] === nums[i-1]) {
            sameArray[i] = 1;
            sameArray[i-1] = 1;
        }

        if (nums[i] === nums[i-1]+1) {
            increaseArray[i] = 1;
            increaseArray[i-1] = 1;
        }

        if (sameArray[i]===0 && increaseArray[i-1]===0) {
            return false;
        }
    } 

    if(sameArray[0] ===0 && increaseArray[0] ===0) {
        return false;
    }

    if (increaseArray[0] === 1 && increaseArray[2]!==1) {
        return false;
    }

    if(increaseArray[n-1] === 1 && increaseArray[n-3]!==1) {
        return false;
    }

    for (let i=1;i<n-1;i++) {
        if(increaseArray[i]===1 && sameArray[i]==0) {
            
        }
    }

}


function test(nums, expected) {
    
    const actual = validPartition(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6137. Check if There is a Valid Partition For The Array', () => {
    it('6137. 1', () => {test( [4,4,4,5,6],  true)});
    it('6137. 2', () => {test( [1,1,1,2],  false)});
    it('6137. 3', () => {test( [1,1,1,2,3],  true)});
    it('6137. 4', () => {test( [1,1,2,3],  true)});
});
