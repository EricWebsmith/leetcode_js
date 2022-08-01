
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {number} n 
 * @param {number} k 
 */
function combination_with_repeat(n, k) {
    let ans = 1;
    for (let i=1;i<=k;i++) {
        ans *= (n+k-i)/i;
    }
    return ans;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    if(m<n) {
        const t = m;
        m=n;
        n=t;
    }

    return combination_with_repeat(m, n-1);
}


function test(m, n, expected) {
    
    const actual = uniquePaths(m, n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('62. Unique Paths', () => {
    it('62. 1', () => {test( 3, 7,  28)});
    it('62. 2', () => {test( 3, 2,  3)});
   
});
