
const { expect } = require("chai");
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
    let maxPath = -1000;

    const dfs = (node) => {
        if (node == null) {
            return 0;
        }

        const leftMax = dfs(node.left);
        const rightMax = dfs(node.right);
        maxPath = Math.max(maxPath, node.val, leftMax + node.val, rightMax + node.val, leftMax + rightMax + node.val);
        return Math.max(leftMax + node.val, rightMax + node.val, node.val);
    }

    dfs(root);

    return maxPath;
}


function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actual = maxPathSum(root);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('124. Binary Tree Maximum Path Sum', () => {
    it('124. 1', () => { test([1, 2, 3], 6) });
    it('124. 2', () => { test([-10, 9, 20, null, null, 15, 7], 42) });
    it('124. 3', () => { test([2, -1], 2) });

});

/*
Runtime: 108 ms, faster than 69.43% of JavaScript online submissions for Binary Tree Maximum Path Sum.
Memory Usage: 51.7 MB, less than 50.35% of JavaScript online submissions for Binary Tree Maximum Path Sum.
*/
