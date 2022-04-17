const { expect } = require("chai");
const _ = require('lodash');
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.arr = [];
    this.index = -1;
    const dfs = (node) => {
        if(node === null) return;
        dfs(node.left);
        this.arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.arr.length - 1 > this.index;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.arr[++this.index] ?? null;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function () {
    return this.arr.length > 0 && this.index > 0
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function () {
    return this.arr[--this.index]??null;
};

/**
 * 
 * @param {string[]} actions 
 * @param {Array} params 
 */
 function test (actions, params, expected) {
    const n = actions.length;
    const root = array2TreeNode(...params[0]);
    const bstIterator = new BSTIterator(root);
    for (let i=1;i<n;i++) {
        //console.log(i);
        switch(actions[i]) {
            case 'hasNext':
                expect(bstIterator.hasNext(...params[i])).to.be.eql(expected[i]);
                break;
            case 'hasPrev':
                expect(bstIterator.hasPrev(...params[i])).to.be.eql(expected[i]);
                break;
            case 'next':
                expect(bstIterator.next(...params[i])).to.be.eql(expected[i]);
                break;
            case 'prev':
                expect(bstIterator.prev(...params[i])).to.be.eql(expected[i]);
                break;
        }
    }
}

describe('1586. Binary Search Tree Iterator II', () => {
    it('1586. 1', () => {test(["BSTIterator", "next", "next", "prev", "next", "hasNext", "next", "next", "next", "hasNext", "hasPrev", "prev", "prev"],
        [[[7, 3, 15, null, null, 9, 20]], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null]],
        [null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]
    )});
    //it('1586. 2', () => {test()});
    //it('1586. 3', () => {test()});
});


/*
Runtime: 528 ms, faster than 100.00% of JavaScript online submissions for Binary Search Tree Iterator II.
Memory Usage: 82.8 MB, less than 100.00% of JavaScript online submissions for Binary Search Tree Iterator II.
*/