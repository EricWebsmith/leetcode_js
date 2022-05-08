const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {string} s
 * @return {number[]}
 */
function findPermutation (s) {
    const ans = [];
    const stack = [];
    
    for (let i=0;i<s.length;i++) {
        stack.push(i+1);
        if(s[i] === 'I') {
            while(stack.length>0) {
                ans.push(stack.pop());
            }
        }
    }

    stack.push(s.length+1);
    while(stack.length>0) {
        ans.push(stack.pop());
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = findPermutation (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test("I", [1,2])});
    it('2', () => {test("DI", [2,1,3])});
    it('3', () => {test("DDDD", [5,4,3,2,1])});
});


/*
Runtime: 92 ms, faster than 94.44% of JavaScript online submissions for Find Permutation.
Memory Usage: 47.3 MB, less than 48.15% of JavaScript online submissions for Find Permutation.
*/