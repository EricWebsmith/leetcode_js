const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
    let skip = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + skip) {
            skip++;
        }
    }
    return k + skip;
}

function test(arr, k, expected) {
    const actual = findKthPositive(arr, k);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1539. Kth Missing Positive Number', () => {
    it('1539. 1', () => { test([2, 3, 4, 7, 11], 5, 9) });
    it('1539. 2', () => { test([1, 2, 3, 4], 2, 6) });
    it('1539. 3', () => {test([1,2], 1, 3)});
});


/*
Runtime: 69 ms, faster than 77.87% of JavaScript online submissions for Kth Missing Positive Number.
Memory Usage: 42.4 MB, less than 61.15% of JavaScript online submissions for Kth Missing Positive Number.
*/