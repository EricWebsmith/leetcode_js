
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalOrder(root) {
    if (root == null) {
        return [];
    }

    const map = {};

    const q = new Queue();
    q.enqueue([root, 0]);
    let qSizie = q.size();
    while (qSizie > 0) {
        for (let i = 0; i < qSizie; i++) {
            const [node, index] = q.dequeue();
            if (!map.hasOwnProperty(index)) {
                map[index] = [];
            }
            map[index].push(node.val);
            if (node.left) {
                q.enqueue([node.left, index - 1]);
            }
            if (node.right) {
                q.enqueue([node.right, index + 1]);
            }
        }

        qSizie = q.size();
    }

    const keys = [...Object.keys(map)];
    keys.sort((a, b) => a - b);
    const ans = [];
    for (const key of keys) {
        ans.push(map[key]);
    }
    return ans;
}

function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actual = verticalOrder(root);
    expect(actual).to.be.eql(expected);
}

describe('314. Binary Tree Vertical Order Traversal', () => {
    it('314. 1', () => { test([3, 9, 20, null, null, 15, 7], [[9], [3, 15], [20], [7]]) });
    it('314. 2', () => { test([3, 9, 8, 4, 0, 1, 7], [[4], [9], [3, 0, 1], [8], [7]]) });
    it('314. 3', () => { test([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5], [[4], [9, 5], [3, 0, 1], [8, 2], [7]]) });
});

/*
Runtime: 83 ms, faster than 76.78% of JavaScript online submissions for Binary Tree Vertical Order Traversal.
Memory Usage: 44.3 MB, less than 27.41% of JavaScript online submissions for Binary Tree Vertical Order Traversal.
*/