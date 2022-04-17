const { expect } = require("chai");
const _ = require('lodash');
const { TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * 
 * @param {TreeNode} node 
 * @returns {TreeNode[]}
 */
function dfs(node) {

    let first = node;
    let last = node;

    if (node.right){
        [rightFirst, rightLast] = dfs(node.right);
        node.right = rightFirst;
        last = rightLast;
    }

    if (node.left) {
        [leftFirst, leftLast] = dfs(node.left);
        leftLast.right = node;
        first = leftFirst;
        node.left = null;
    }

    return [first, last];
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function increasingBST (root) {
    const [ans, _] = dfs(root);
    return ans;
}

function test(rootArray, expected) {
    const root = array2TreeNode(rootArray);
    const actualArray = increasingBST (root);
    const actual = treeNode2Array(actualArray);
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('897. Increasing Order Search Tree', () => {
    it('897. 1', () => {test([5,3,6,2,4,null,8,1,null,null,null,7,9], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9])});
    it('897. 2', () => {test([5,1,7], [1,null,5,null,7])});
    //it('897. 3', () => {test()});
});


/*
Runtime: 49 ms, faster than 99.34% of JavaScript online submissions for Increasing Order Search Tree.
Memory Usage: 43.5 MB, less than 30.56% of JavaScript online submissions for Increasing Order Search Tree.
*/