
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossible(nums) {
    const c = {}
    for (const num of nums) {
        c[num] = (c[num] ?? 0) + 1;
    }
    ends = {}

    for (const num of nums) {
        if (c[num] === 0) {
            continue;
        }
        c[num]--;

        if ((ends[num - 1] ?? 0) > 0) {
            ends[num] = (ends[num] ?? 0) + 1;
            ends[num - 1]--;
        } else {
            if ((c[num + 1] ?? 0) === 0 || (c[num + 2] ?? 0) === 0) {
                return false;
            }
            c[num + 1]--;
            c[num + 2]--;
            ends[num + 2] = (ends[num + 2] ?? 0) + 1;
        }
    }

    return true;
}


function test(nums, expected) {

    const actual = isPossible(nums);
    expect(actual).to.be.eql(expected);
}

describe('659. Split Array into Consecutive Subsequences', () => {
    it('659. 1', () => { test([1, 2, 3, 3, 4, 5], true) });
    it('659. 2', () => { test([1, 2, 3, 3, 4, 4, 5, 5], true) });
    it('659. 3', () => { test([1, 2, 3, 4, 4, 5], false) });
    it('659. 4', () => { test([3, 4, 4, 5, 6, 7, 8, 9, 10, 11], false) });

});

/*
Runtime: 122 ms, faster than 73.75% of JavaScript online submissions for Split Array into Consecutive Subsequences.
Memory Usage: 51.8 MB, less than 13.75% of JavaScript online submissions for Split Array into Consecutive Subsequences.
*/