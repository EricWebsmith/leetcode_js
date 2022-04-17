const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {TreeNode} node 
 * @param {number} inheritValue
 * @returns {number} max value
 */
function dfs(node, inheritValue) {
    if (!node) { return inheritValue};
    if (!node.left && !node.right) {
        node.val += inheritValue;
        return node.val;
    }

    const rightValue = dfs(node.right, inheritValue);
    node.val += rightValue;
    const leftValue = dfs(node.left, node.val);
    return leftValue;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST (root) {
    if (!root) { return root;}
    dfs(root, 0);
    return root;
}

function test(rootArray, expected) {
    const root = array2TreeNode(rootArray);
    const actualArray = convertBST (root);
    const actual = treeNode2Array(actualArray);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('538. Convert BST to Greater Tree', () => {
    it('538. 1', () => {test([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8], [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8])});
    it('538. 2', () => {test([0,null,1], [1,null,1])});
    it('538. 3', () => {test([], [])});
});


/*
Runtime: 99 ms, faster than 83.33% of JavaScript online submissions for Convert BST to Greater Tree.
Memory Usage: 51.2 MB, less than 93.65% of JavaScript online submissions for Convert BST to Greater Tree.
*/