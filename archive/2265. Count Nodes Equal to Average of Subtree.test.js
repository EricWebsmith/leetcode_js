
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {TreeNode} node
 * @return {number[]}
 */
function dfs(node) {
    if (node == null) {
        return [0, 0, 0];
    }

    const [leftSum, leftNodeCount, leftAnsCount] = dfs(node.left);
    const [rightSum, rightNodeCount, rightAnsCount] = dfs(node.right);

    const sum = leftSum + rightSum + node.val;
    const nodeCount = leftNodeCount + rightNodeCount + 1;
    const isAns = node.val === Math.floor(sum / nodeCount);
    const ansCount = leftAnsCount + rightAnsCount + (isAns ? 1 : 0);

    return [sum, nodeCount, ansCount];
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function averageOfSubtree(root) {
    const [_sum, _nodeCount, ansCount] = dfs(root);
    return ansCount;
}

function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actual = averageOfSubtree(root);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('2265. Count Nodes Equal to Average of Subtree', () => {
    it('2265. 1', () => { test([4, 8, 5, 0, 1, null, 6], 5) });
    it('2265. 2', () => { test([1], 1) });

});


/*
Runtime: 72 ms, faster than 97.37% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
Memory Usage: 46.5 MB, less than 90.00% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
*/