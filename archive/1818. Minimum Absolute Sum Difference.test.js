
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

function bisectLeft(arr, x) {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        const mid = (r + l) >>> 1;
        if (arr[mid] < x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minAbsoluteSumDiff(nums1, nums2) {
    const mod = 1e9+7;
    const n = nums1.length;
    const distanceArr = [];
    for (let i = 0; i < n; i++) {
        distanceArr.push(Math.abs(nums1[i] - nums2[i]));
    }

    // maximise offset
    let offset = 0;
    nums1.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        const oldDist = distanceArr[i];
        if (oldDist === 0) {
            continue;
        }
        const x = nums2[i];

        const index = bisectLeft(nums1, x);
        let newDist = oldDist;
        if (index < n) {
            newDist = Math.min(newDist, Math.abs(nums1[index] - nums2[i]));
        }

        if (index - 1 >= 0) {
            newDist = Math.min(newDist, Math.abs(nums1[index-1] - nums2[i]));
        }

        offset = Math.max(offset, oldDist - newDist);

    }

    let ans = 0;
    for (let i=0;i<n;i++) {
        ans += distanceArr[i];
        ans %= mod;
    }
    ans = (ans + mod - offset) % mod;
    return ans;
}


function test(nums1, nums2, expected) {

    const actual = minAbsoluteSumDiff(nums1, nums2);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1818. Minimum Absolute Sum Difference', () => {
    it('1818. 1', () => { test([1, 7, 5], [2, 3, 5], 3) });
    it('1818. 2', () => { test([2, 4, 6, 8, 10], [2, 4, 6, 8, 10], 0) });
    it('1818. 3', () => { test([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4], 20) });

});


/*
Runtime: 210 ms, faster than 93.48% of JavaScript online submissions for Minimum Absolute Sum Difference.
Memory Usage: 57.4 MB, less than 32.61% of JavaScript online submissions for Minimum Absolute Sum Difference.
*/