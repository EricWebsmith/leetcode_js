const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
    const n = arr.length;
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === x) {
            break;
        } else if (arr[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    const ans = [];
    if (arr[mid] === x) {
        ans.push(x);
        left = mid - 1;
        right = mid + 1;
    } else {
        [left, right] = [right, left];
    }


    while (ans.length < k) {
        if (left === -1) {
            ans.push(arr[right]);
            right++;
        } else if (right === n) {
            ans.push(arr[left]);
            left--;
        } else if (x - arr[left] <= arr[right] - x) {
            ans.push(arr[left]);
            left--;
        } else {
            ans.push(arr[right]);
            right++
        }
    }
    ans.sort((a, b) => a - b);
    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = findClosestElements(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => { test([1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4]) });
    it('2', () => { test([1, 2, 3, 4, 5], 4, -1, [1, 2, 3, 4]) });
    it.only('3', () => { test([-2, -1, 1, 2, 3, 4, 5], 7, 3, [-2, -1, 1, 2, 3, 4, 5]) });
});


/*
Runtime: 101 ms, faster than 80.19% of JavaScript online submissions for Find K Closest Elements.
Memory Usage: 49.7 MB, less than 14.71% of JavaScript online submissions for Find K Closest Elements.
*/