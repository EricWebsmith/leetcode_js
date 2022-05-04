const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
    const map = new Map();
    let ans = 0;
    for(const v of nums) {
        const r = k - v;
        if(map.has(r) && map.get(r)>0) {
            ans++;
            map.set(r, map.get(r)-1);
        } else {
            const count = map.get(v) || 0;
            map.set(v, count + 1)
        }
    }

    return ans;
}


function test(...args) {
    expected = args.pop();
    const actual = maxOperations (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1679. Max Number of K-Sum Pairs', () => {
    it('1679. 1', () => {test([1,2,3,4], 5, 2)});
    it('1679. 2', () => {test([3,1,3,4,3], 6, 1)});
    //it('844. 3', () => {test(false, "a#c", "b")});
});

/*
Runtime: 122 ms, faster than 81.13% of JavaScript online submissions for Max Number of K-Sum Pairs.
Memory Usage: 54.9 MB, less than 62.26% of JavaScript online submissions for Max Number of K-Sum Pairs.
*/