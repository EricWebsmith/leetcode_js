
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
function minimumNumbers(num, k) {
    if (num === 0) { return 0;}
    const targeUnit = num % 10;
    for (let i=1;i<=10;i++) {
        const multi = k * i;
        const unit = multi % 10;
        if (targeUnit === unit && multi<=num) {
            return i;
        }
    }

    return -1;
};

function test(...args) {
    const expected = args.pop();
    const actual = minimumNumbers (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('5218. Sum of Numbers With Units Digit K', () => {

    it('5218. 1', () => {test(58,  9, 2)});
    it('5218. 2', () => {test(37,  2, -1)});
    it('5218. 3', () => {test(0,  7, 0)});    
    it('5218. 4', () => {test(1,  1, 1)});  
    it('5218. 4', () => {test(10,  1, 10)});  
});

