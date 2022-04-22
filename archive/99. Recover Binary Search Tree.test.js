const { expect } = require("chai");
const _ = require('lodash');
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function recoverTree (root) {
	let x = null,
		y = null,
		prev = null;
	const dfs = (node) => {
		if (!node) return;
		dfs(node.left);
		if (prev && node.val < prev.val) {
			if (x == null) x = prev;
			y = node;
		}
		prev = node;
		dfs(node.right);
	};
	dfs(root);
	[x.val, y.val] = [y.val, x.val];
}

function test(rootArray, expected) {
    const root = array2TreeNode(rootArray);
    recoverTree(root);
    const actual = treeNode2Array(root);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('99. Recover Binary Search Tree', () => {
    it('99. 1', () => {test([1,3,null,null,2], [3,1,null,null,2])});
    it('99. 2', () => {test([3,1,4,null,null,2], [2,1,4,null,null,3])});
    it('99. 3', () => {test([2,3,1], [2,1,3])});
});


/*
Runtime: 109 ms, faster than 100.00% of JavaScript online submissions for Recover Binary Search Tree.
Memory Usage: 52.1 MB, less than 75.66% of JavaScript online submissions for Recover Binary Search Tree.
*/