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
    let right = n - 1;
    let mid = 0;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] <= val) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }

    arr.splice(left, 0, val);
    console.log(arr);
}

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    stones.sort((a, b) => a - b);
    while (stones.length > 1) {
        const stone1 = stones.pop();
        const stone2 = stones.pop();
        const newStone = stone1 - stone2;
        if (newStone !== 0) {
            binaryInsert(stones, newStone);
        }
    }
    if (stones.length === 0) {
        return 0;
    }
    return stones.pop();
}

function test(stones, expected) {
    const actual = lastStoneWeight(stones);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1046. Last Stone Weight', () => {
    it('1046. 1', () => { test([2, 7, 4, 1, 8, 1], 1) });
    it('1046. 2', () => { test([1], 1) });
    it('1046. 3', () => { test([2,2], 0) });
});


/*
Runtime: 80 ms, faster than 60.09% of JavaScript online submissions for Last Stone Weight.
Memory Usage: 45.9 MB, less than 6.79% of JavaScript online submissions for Last Stone Weight.
*/