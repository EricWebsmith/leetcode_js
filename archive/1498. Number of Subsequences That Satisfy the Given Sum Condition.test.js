
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

const mod = 1e9+7;

function get2Powers(n) {
    let ans = 1;
    const result = [1]
    for(let i=0;i<n;i++) {
        ans = ans<<1;
        ans %= mod;
        result.push(ans);
    }
    return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function numSubseq(nums, target) {
    nums.sort((a, b)=>a-b);
    const n = nums.length;
    let ans = 0;

    if (target - nums[0] < nums[0]) {
        return 0;
    }

    const powers = get2Powers(n);

    let left = 0
    let right = n - 1;
    while(left<=right) {
        if(nums[left] + nums[right]>target) {
            right--;
        } else {
            ans += powers[right - left];
            left++;
        }
    }

    return ans % mod;
}

function test(nums, target, expected) {

    const actual = numSubseq(nums, target);
    expect(actual).to.be.eql(expected);
}

describe('1498. Number of Subsequences That Satisfy the Given Sum Condition', () => {
    it('1498. 1', () => { test([3, 5, 6, 7], 9, 4) });
    it('1498. 2', () => { test([3, 3, 6, 8], 10, 6) });
    it('1498. 3', () => { test([2, 3, 3, 4, 6, 7], 12, 61) });
    it('1498. 4', () => { test([7,10,7,3,7,5,4], 12, 56) });
    it('1498. 5', () => { test([6,10,12,3,29,21,12,25,17,19,16,1,2,24,9,17,25,22,12,22,26,24,24,11,3,7,24,5,15,30,23,5,20,10,19,20,9,27,11,4,23,4,4,12,22,27,16,11,26,10,23,26,16,21,24,21,17,13,21,9,16,17,27]
        , 26, 963594139) });
    it('1498. 6', () => { test([14,4,6,6,20,8,5,6,8,12,6,10,14,9,17,16,9,7,14,11,14,15,13,11,10,18,13,17,17,14,17,7,9,5,10,13,8,5,18,20,7,5,5,15,19,14], 
        22, 272187084) });

});

/*
Runtime: 214 ms, faster than 92.31% of JavaScript online submissions for Number of Subsequences That Satisfy the Given Sum Condition.
Memory Usage: 56.6 MB, less than 46.15% of JavaScript online submissions for Number of Subsequences That Satisfy the Given Sum Condition.


1498 The requirement is not friendly for Javascript/Typescript languages
https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/1426

*/