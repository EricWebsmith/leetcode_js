const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum (c) {
    const set = new Set();
    let index = 0;
    while(index * index <= c) {
        set.add(index * index);
        index++;
    }

    for (const i of set) {
        const r = c - i;
        if (set.has(r)) {
            return true;
        }
    }

    return false;
}

function test(expected, args) {
    const actual = judgeSquareSum (args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('633. Sum of Square Numbers', () => {
    it('633. 1', () => {test(true, 5)});
    it('633. 2', () => {test(false, 3)});
    it('633. 3', () => {test(true, 2)});
    it('633. 4', () => {test(false, 7)});
    it('633. 5', () => {test(true, 4)});
});
