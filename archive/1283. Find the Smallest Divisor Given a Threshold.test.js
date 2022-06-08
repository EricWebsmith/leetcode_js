const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');
const { floor } = require("lodash");



/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
function smallestDivisor(nums, threshold) {
    function condition(candidate) {
        let ans = 0;
        for (const num of nums) {
            ans += Math.ceil(num / candidate);
        }
        return ans <= threshold;
    }

    let left = 1;
    let right = Math.max(...nums);
    let mid = right;
    while (left < right) {
        mid = left + Math.floor((right - left) / 2)
        if (condition(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}

function test(...args) {
    const expected = args.pop();
    const actual = smallestDivisor(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1283. Find the Smallest Divisor Given a Threshold', () => {
    it('1283. 1', () => { test([1, 2, 5, 9], 6, 5) });
    it('1283. 2', () => { test([44, 22, 33, 11, 1], 5, 44) });
    //it('3', () => { test() });
});


/*
Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.
Memory Usage: 45.7 MB, less than 60.93% of JavaScript online submissions for Find the Smallest Divisor Given a Threshold.
*/