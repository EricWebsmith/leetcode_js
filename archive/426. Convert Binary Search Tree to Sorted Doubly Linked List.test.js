const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 * 
 * @param {Node} node 
 * @returns {number[]}
 */
 function inorder(node) {
    if (node == null) {
        return [];
    }
    return inorder(node.left).concat([node.val]).concat(inorder(node.right))
}

/**
 * @param {Node} root
 * @return {Node}
 */
function treeToDoublyList(root) {
    if (root == null) {return null;}
    const lst = inorder(root);
    const head = new Node(-1);
    const first = new Node(lst[0]);
    head.right = first;
    let previous = first;
    for(let i=1;i<lst.length;i++) {
        const current = new Node(lst[i]);
        previous.right = current;
        current.left = previous;
        previous = current;
    }

    previous.right = first;
    first.left = previous;
    return head.right;
}

function test(...args) {
    const expected = args.pop();
    const actual = treeToDoublyList(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('426. Convert Binary Search Tree to Sorted Doubly Linked List', () => {
    it('426. 1', () => { test() });
    it('426. 2', () => { test() });
    it('426. 3', () => { test() });
});


/**
Runtime: 79 ms, faster than 57.79% of JavaScript online submissions for Convert Binary Search Tree to Sorted Doubly Linked List.
Memory Usage: 46.4 MB, less than 6.32% of JavaScript online submissions for Convert Binary Search Tree to Sorted Doubly Linked List.
 */