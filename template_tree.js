const { expect } = require("chai");
const _ = require('lodash');
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

function func (root) {

}

function test(rootArray, expected) {
    const root = array2TreeNode(rootArray);
    const actual = func (root);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test()});
    it('2', () => {test()});
    it('3', () => {test()});
});
