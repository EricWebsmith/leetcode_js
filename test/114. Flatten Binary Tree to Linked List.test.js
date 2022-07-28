
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


function dfs(node) {
    const right = node.right;
    const left  = node.left;
    node.left = null;
    node.right = null;
    const firstNode = node;
    let lastNode = firstNode;
    if(left) {
        const leftNodes = dfs(left);    
        lastNode.right = leftNodes[0];
        lastNode = leftNodes[1];
    }
    node.left = null;

    if(right) {
        const rightNodes = dfs(right);
        lastNode.right = rightNodes[0];
        lastNode = rightNodes[1];
    }
 
    return [firstNode, lastNode];
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if(!root) {
        return null;
    }
    const [head, _] = dfs(root);
    return head;
}


function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actualTreeNode = flatten(root);
    const actual = treeNode2Array(actualTreeNode);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('114. Flatten Binary Tree to Linked List', () => {
    it('114. 1', () => {test( [1,2,5,3,4,null,6],  [1,null,2,null,3,null,4,null,5,null,6])});
    it('114. 2', () => {test( [],  [])});
    it('114. 3', () => {test( [0],  [0])});
   
});


/*
Runtime: 81 ms, faster than 84.14% of JavaScript online submissions for Flatten Binary Tree to Linked List.
Memory Usage: 44.6 MB, less than 47.91% of JavaScript online submissions for Flatten Binary Tree to Linked List.
*/