const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minProductSum (nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>b-a);
    let ans = 0;
    for(let i=0;i<nums1.length;i++){
        ans += nums1[i] * nums2[i];
    }
    return ans;
}

function test(nums1, nums2, expected) {
    const actual = minProductSum (nums1, nums2);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1874. Minimize Product Sum of Two Arrays', () => {
    it('1874. 1', () => {test([5,3,4,2], [4,2,2,5], 40)});
    it('1874. 2', () => {test([2,1,4,5,7], [3,2,4,8,6], 65)});
    //it('1874. 3', () => {test()});
});


/*
Runtime: 224 ms, faster than 76.06% of JavaScript online submissions for Minimize Product Sum of Two Arrays.
Memory Usage: 59.7 MB, less than 70.42% of JavaScript online submissions for Minimize Product Sum of Two Arrays.
*/