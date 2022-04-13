const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxDistance(nums1, nums2) {
    let ans = 0;
    let j = 0;
    for (let i = 0; i < nums1.length; i++) {

        while(j+1<nums2.length && nums1[i]<=nums2[j+1] ){
            j++;
        }
        ans = Math.max(ans, j-i);
    }

    return ans;
}

function test(expected, ...args) {
    const actual = maxDistance(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1855. Maximum Distance Between a Pair of Values', () => {
    it('1855. 1', () => { test(2, [55, 30, 5, 4, 2], [100, 20, 10, 10, 5]) });
    it('1855. 2', () => { test(1, [2, 2, 2], [10, 10, 1]) });
    it('1855. 3', () => { test(2, [30, 29, 19, 5], [25, 25, 25, 25, 25]) });
});

/*
Runtime: 74 ms, faster than 100.00% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
Memory Usage: 54.6 MB, less than 15.19% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
*/