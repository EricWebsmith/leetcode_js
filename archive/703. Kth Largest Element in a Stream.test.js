const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * 
 * @param {number[]} stones 
 * @param {number} val 
 */
 function binaryInsert(arr, val) {

    const n = arr.length;
    let left = 0;
    let right = n;
    let mid = 0;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] <= val) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    arr.splice(left, 0, val);
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
    this.nums = nums;
    this.k = k;
    nums.sort((a,b)=>b-a);
    nums = nums.slice(0,k-1);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    binaryInsert(this.nums, val);
    if(this.nums.length>k){
        this.nums.pop();
    }
    return this.nums[this.k-1];
};

function test(nums, expected) {
    const actual = func (nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('703. Kth Largest Element in a Stream', () => {
    
    it('703. 1', () => {
        const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).to.be.eql(4);   // return 4
        expect(kthLargest.add(5)).to.be.eql(5);   // return 5
        expect(kthLargest.add(10)).to.be.eql(5);  // return 5
        expect(kthLargest.add(9)).to.be.eql(8);   // return 8
        expect(kthLargest.add(4)).to.be.eql(8);   // return 8
        expect(kthLargest.add(4)).to.be.eql(8); 
        expect(kthLargest.add(4)).to.be.eql(8); 
        expect(kthLargest.add(4)).to.be.eql(8); 
    });

    //it('703. 2', () => {});
    //it('703. 3', () => {});
});


/*
Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Kth Largest Element in a Stream.
Memory Usage: 49.4 MB, less than 84.88% of JavaScript online submissions for Kth Largest Element in a Stream.
*/