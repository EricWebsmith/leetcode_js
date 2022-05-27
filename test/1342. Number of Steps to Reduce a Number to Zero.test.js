const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps (num) {
    let ans = 0;
    while(num > 0) {
        if (num & 1 === 1) {
            num = num - 1;
        } else {
            num = num / 2;
        }
        ans++;
    }
    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = numberOfSteps (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1342. Number of Steps to Reduce a Number to Zero', () => {
    it('1342. 1', () => {test(14, 6)});
    it('1342. 2', () => {test(8, 4)});
    it('1342. 3', () => {test(123, 12)});
});


/*
Runtime: 65 ms, faster than 81.31% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 42.1 MB, less than 52.28% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
*/