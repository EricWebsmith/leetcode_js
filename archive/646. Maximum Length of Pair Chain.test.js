
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
    const n = pairs.length;
    pairs.sort((a, b)=> a[1]-b[1]);
    let last = pairs[0]
    let ans = 1;
    for (let i=1;i<n;i++) {
        if (pairs[i][0]>last[1]) {
            last = pairs[i];
            ans++
        }
    }
    return ans;
}


function test(pairs, expected) {
    
    const actual = findLongestChain(pairs);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('646. Maximum Length of Pair Chain', () => {
    it('646. 1', () => {test( [[1,2],[2,3],[3,4]],  2)});
    it('646. 2', () => {test( [[1,2],[7,8],[4,5]],  3)});
   
});

/*
Runtime: 87 ms, faster than 97.03% of JavaScript online submissions for Maximum Length of Pair Chain.
Memory Usage: 45.6 MB, less than 83.17% of JavaScript online submissions for Maximum Length of Pair Chain.
*/