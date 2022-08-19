
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
    /**
     * 
     * @param {TreeNode[]} arr 
     * @returns 
     */
    const dfs_path = (arr) => {
        const node = arr[arr.length - 1]

        if (node.val === target.val) {
            return true;
        }

        const found = false;
        if (node.left != null) {
            arr.push(node.left);
            if (dfs_path(arr)) {
                return true;
            }
            arr.pop();
        }

        if (node.right != null) {
            arr.push(node.right);
            if (dfs_path(arr)) {
                return true;
            }
            arr.pop();
        }

        return false;
    }

    const path = [root];
    dfs_path(path);
    if (path[path.length-1].val!==target.val) {
        return [];
    }

    const ans = [];
    const dfs_values = (node, k) => {
        if (node == null) {
            return;
        }

        if (k === 0) {
            ans.push(node.val);
            return;
        }

        dfs_values(node.left, k - 1);
        dfs_values(node.right, k - 1);
    }

    for (let i = 0; i < path.length - 1; i++) {
        const node = path[i];
        const distance = path.length - i - 1;

        if (distance === k) {
            ans.push(node.val);
        }

        const nextNode = (node.left === path[i + 1] ? node.right : node.left);
        dfs_values(nextNode, k - distance - 1)
    }

    dfs_values(path[path.length-1], k)

    return ans;
}


function test(rootArr, targetArr, k, expected) {
    const root = array2TreeNode(rootArr);
    const target = array2TreeNode([targetArr]);
    const actual = distanceK(root, target, k);
    expect(actual).to.have.members(expected);
}

describe('863. All Nodes Distance K in Binary Tree', () => {
    it('863. 1', () => { test([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2, [7, 4, 1]) });
    it('863. 2', () => { test([1], 1, 3, []) });

});

/*
Runtime: 67 ms, faster than 96.67% of JavaScript online submissions for All Nodes Distance K in Binary Tree.
Memory Usage: 44.4 MB, less than 66.08% of JavaScript online submissions for All Nodes Distance K in Binary Tree.
*/