const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')




function isArithmetic(arr) {
    const n = arr.length;
    if (arr.length <= 2) {
        return true;
    }

    const diff = arr[0] - arr[1];
    for (let i = 1; i < n - 1; i++) {
        if (diff !== arr[i] - arr[i + 1]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
function checkArithmeticSubarrays(nums, l, r) {
    const n = nums.length;
    const m = l.length;
    const ans = [];
    for (let i = 0; i < m; i++) {
        const subArray = nums.slice(l[i], r[i]+1);
        subArray.sort((a,b)=>a-b);
        ans.push(isArithmetic(subArray));
    }
    return ans;
}

function test(nums, l, r, expected) {
    const actual = checkArithmeticSubarrays(nums, l, r);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1630. Arithmetic Subarrays', () => {
    it('1630. 1', () => { test([4,6,5,9,3,7], [0,0,2], [2,3,5],  [true,false,true]) });
    it('1630. 2', () => { test([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10], [false,true,false,false,true,true]) });
    //it('3', () => { test() });
});


/*
Runtime: 124 ms, faster than 98.18% of JavaScript online submissions for Arithmetic Subarrays.
Memory Usage: 48.9 MB, less than 38.18% of JavaScript online submissions for Arithmetic Subarrays.
*/