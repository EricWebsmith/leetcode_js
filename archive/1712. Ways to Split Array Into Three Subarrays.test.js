
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplit(nums) {
    for (let i = 1; i < nums.length; i++) nums[i] += nums[i-1]
    let lim = nums.length-2, max = nums[lim+1], t, ans = 0
    for (let [i,j,k] = [0,1,2]; nums[i] <= max / 3 && i < lim; i++) {
        for (t = nums[i] * 2; (nums[j] < t || j === i) && j < lim;) j++
        for (t = (max + nums[i]) / 2; nums[k] <= t && k <= lim;) k++
        ans += k - j
    }
    return ans % 1000000007
}

function test(...args) {
    const expected = args.pop();
    const actual = waysToSplit(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1712. Ways to Split Array Into Three Subarrays', () => {

    it('1712. 1', () => { test([1, 1, 1], 1) });
    it('1712. 2', () => { test([1, 2, 2, 2, 5, 0], 3) });
    it('1712. 3', () => { test([3, 2, 1], 0) });
    it('1712. 4', () => { test([2, 3, 5, 10], 3) });
    it('1712. 5', () => { test([8, 3, 2, 0, 0, 6], 0) });
    it('1712. 6', () => { test([8892, 2631, 7212, 1188, 6580, 1690, 5950, 7425, 8787, 4361, 9849, 4063, 9496, 9140, 9986, 1058, 2734, 6961, 8855, 2567, 7683, 4770, 40, 850, 72, 2285, 9328, 6794, 8632, 9163, 3928, 6962, 6545, 6920, 926, 8885, 1570, 4454, 6876, 7447, 8264, 3123, 2980, 7276, 470, 8736, 3153, 3924, 3129, 7136, 1739, 1354, 661, 1309, 6231, 9890, 58, 4623, 3555, 3100, 3437], 227) });
});

/*
Runtime: 109 ms, faster than 95.65% of JavaScript online submissions for Ways to Split Array Into Three Subarrays.
Memory Usage: 51.6 MB, less than 100.00% of JavaScript online submissions for Ways to Split Array Into Three Subarrays.
*/