const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array, array2Node } = require('../leetcode')

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (!root) { return []; }
    const ans = [[root.val]];
    function dfs (node, idx) {
        if (!node || !node.children.length) return;
        if (!ans[idx]) {
            ans[idx] = [];
        }
        for (const child of node.children) {
            ans[idx].push(child.val);
            dfs(child, idx + 1);
        }
    };
    dfs(root, 1);
    return ans;
}

function test(rootArr, expected) {
    const root = array2Node(rootArr);
    const actual = levelOrder(root);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('429. N-ary Tree Level Order Traversal', () => {
    it('429. 1', () => { test([1, null, 3, 2, 4, null, 5, 6], [[1], [3, 2, 4], [5, 6]]) });
    it('429. 2', () => { test([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14], [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]]) });
    it('429. 3', ()=>{test([], [])});
});


/*
Runtime: 72 ms, faster than 98.97% of JavaScript online submissions for N-ary Tree Level Order Traversal.
Memory Usage: 46.2 MB, less than 71.28% of JavaScript online submissions for N-ary Tree Level Order Traversal.
*/