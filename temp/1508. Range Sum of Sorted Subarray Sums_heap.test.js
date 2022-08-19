
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeSum(nums, n, left, right) {
    const heap = new MinPriorityQueue({ priority: x => x[0] });
    const mod = 1e9 + 7;
    let result = 0;

    for (let i = 0; i < n; i++) {
        heap.enqueue([nums[i], i]);
    }

    for (let i = 1; i <= right; i++) {
        const [sum, index] = heap.dequeue().element;
        if (i >= left) result = (result + sum) % mod;
        if (index < n - 1) {
            heap.enqueue([sum + nums[index + 1], index + 1]);
        }
    }

    return result;
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

});

/*
Runtime: 364 ms, faster than 92.00% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
Memory Usage: 50.6 MB, less than 92.00% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
*/