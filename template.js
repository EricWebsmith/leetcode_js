const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

function func () {

}

function test(expected, ...args) {
    const actual = func (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test()});
    it('2', () => {test()});
    it('3', () => {test()});
});
