
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeSum(nums, n, left, right) {
    const mod = 1e9 + 7;
    const arr = [];

    for (let i=0;i<n;i++) {
        let s = 0;
        for (let j=i;j<n;j++) {
            s += nums[j];
            arr.push(s);
        }
    }

    arr.sort((a, b) => a - b);

    let ans = 0;
    for (let i = left - 1; i <= right - 1; i++) {
        ans += arr[i]
        ans = ans % mod;
    }
    return ans;
}


function test(nums, n, left, right, expected) {

    const actual = rangeSum(nums, n, left, right);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1508. Range Sum of Sorted Subarray Sums', () => {
    it('1508. 1', () => { test([1, 2, 3, 4], 4, 1, 5, 13) });
    it('1508. 2', () => { test([1, 2, 3, 4], 4, 3, 4, 6) });
    it('1508. 3', () => { test([1, 2, 3, 4], 4, 1, 10, 50) });
    it('1508. 4', () => { test([9, 3, 2, 2, 6, 9, 6, 6], 8, 4, 8, 27) });

});


/*
Runtime: 455 ms, faster than 68.00% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
Memory Usage: 85.1 MB, less than 24.00% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
*/