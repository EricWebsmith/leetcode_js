
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node
 * @return {number}
 */
function getLeftHeight(node) {
    if (node == null) {
        return 0;
    }

    return getLeftHeight(node.left) + 1;
}

/**
 * @param {TreeNode} node
 * @return {number}
 */
 function getRightHeight(node) {
    if (node == null) {
        return 0;
    }

    return getRightHeight(node.right) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (root == null) {
        return 0;
    }

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);
    if (leftHeight > rightHeight){
        return 1+countNodes(root.left)+countNodes(root.right);
    } else {
        return Math.pow(2, leftHeight) - 1;
    }
}

function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actual = countNodes(root);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('222. Count Complete Tree Nodes', () => {

    it('222. 1', () => { test([1, 2, 3, 4, 5, 6], 6) });
    it('222. 2', () => { test([], 0) });
    it('222. 3', () => { test([1], 1) });
});

/*
Runtime: 86 ms, faster than 99.31% of JavaScript online submissions for Count Complete Tree Nodes.
Memory Usage: 61.2 MB, less than 99.54% of JavaScript online submissions for Count Complete Tree Nodes.
*/