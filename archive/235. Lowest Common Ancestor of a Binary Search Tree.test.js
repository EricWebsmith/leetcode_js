
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')



/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    let node = root;

    if (p.val > q.val) {
        let temp = p;
        p = q;
        q = temp;
    }

    while(node!=null) {
        if (p.val === node.val) {
            return p;
        }

        if (q.val === node.val) {
            return q;
        }

        if (p.val < node.val && q.val > node.val) {
            return node;
        }

        if (p.val < node.val) {
            node = node.left;
        } else {
            node = node.right;
        }
    }

    return node;
}


function test(rootArr, pArr, qArr, expected) {
    const root = array2TreeNode(rootArr);
    const p = array2TreeNode([pArr]);
    const q = array2TreeNode([qArr]);
    const actualHead = lowestCommonAncestor(root, p, q);
    const actual = actualHead.val;
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('235. Lowest Common Ancestor of a Binary Search Tree', () => {
    it('235. 1', () => {test( [6,2,8,0,4,7,9,null,null,3,5], 2, 8,  6)});
    it('235. 2', () => {test( [6,2,8,0,4,7,9,null,null,3,5], 2, 4,  2)});
    it('235. 3', () => {test( [2,1], 2, 1,  2)});
   
});


/*
Runtime: 95 ms, faster than 85.39% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 52.3 MB, less than 52.99% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
*/