const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
    let ans = -1;
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>=i+1) {
            ans = i+1;
        } else if (nums[i]>=ans) {
            return -1;
        }
    }
    return ans;
}

function test(nums, expected) {
    const actual = specialArray(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1608. Special Array With X Elements Greater Than or Equal X', () => {
    it('1608. 1', () => { test([3, 5], 2) });
    it('1608. 2', () => { test([0, 0], -1) });
    it('1608. 3', () => { test([0, 4, 3, 0, 4], 3) });
    it('1608. 4', () => { test([1, 0, 0, 6, 4, 9], 3) });
    it('1608. 5', () => { test([3,6,7,7,0], -1) });
});


/*
Runtime: 62 ms, faster than 91.22% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
Memory Usage: 42.3 MB, less than 47.30% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
*/