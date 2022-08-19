
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');


function bisectLeft(arr, x, l, r) {
    while (l < r) {
        const mid = (l + r) >> 1;
        if (arr[mid] < x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

function bisectRight(arr, x, l, r) {
    while (l < r) {
        const mid = (l + r) >> 1;
        if (arr[mid] <= x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLengthOfShortestSubarray(arr) {
    const n = arr.length;
    let headLength = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] >= arr[i - 1]) {
            headLength++;
        } else {
            break;
        }
    }

    if (headLength === n) {
        return 0;
    }

    let tailStart = n - 1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] <= arr[i + 1]) {
            tailStart = i;
        } else {
            break;
        }
    }

    let ans = n;
    for (let i = tailStart; i < n; i++) {
        const index = bisectRight(arr, arr[i], 0, headLength);
        ans = Math.min(ans, i - index);
    }

    for (let i = 0; i < headLength; i++) {
        const index = bisectLeft(arr, arr[i], tailStart, n);
        ans = Math.min(ans, index - i-1);
    }

    return ans;
}


function test(arr, expected) {

    const actual = findLengthOfShortestSubarray(arr);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1574. Shortest Subarray to be Removed to Make Array Sorted', () => {
    it('1574. 1', () => { test([1, 2, 3, 10, 4, 2, 3, 5], 3) });
    it('1574. 2', () => { test([5, 4, 3, 2, 1], 4) });
    it('1574. 3', () => { test([1, 2, 3], 0) });
    it('1574. 4', () => { test([13, 0, 14, 7, 18, 18, 18, 16, 8, 15, 20], 8) });
    it('1574. 5', () => { test([1, 2, 3, 10, 0, 7, 8, 9], 2) });
    it('1574. 6', () => { test([10, 13, 17, 21, 15, 15, 9, 17, 22, 22, 13], 7) });

});


/*
Runtime: 91 ms, faster than 94.44% of JavaScript online submissions for Shortest Subarray to be Removed to Make Array Sorted.
Memory Usage: 51.4 MB, less than 88.89% of JavaScript online submissions for Shortest Subarray to be Removed to Make Array Sorted.
*/