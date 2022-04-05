const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(arr) {
    const n = arr.length;
    let left = 0;
    let right = n - 1;
    while(left<right){
        const mid = left +Math.floor((right - left)/2);
        if (arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) {
            return mid;
        }

        if(arr[mid]>arr[mid-1]) {
            left = mid;
        }
        else {
            right = mid;
        }
    }

    return -1;
}

function test(arr, expected) {
    const actual = peakIndexInMountainArray(arr);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('852. Peak Index in a Mountain Array', () => {
    it('852. 1', () => { test([0,1,0], 1) });
    it('852. 2', () => { test([0,2,1,0], 1) });
    it('852. 3', () => { test([0,10,5,2], 1) });
});


/*
Runtime: 56 ms, faster than 97.14% of JavaScript online submissions for Peak Index in a Mountain Array.
Memory Usage: 43.1 MB, less than 11.95% of JavaScript online submissions for Peak Index in a Mountain Array.
*/