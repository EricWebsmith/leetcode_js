
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;
    let ans = true;

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} max 
     * @param {number} min 
     * @returns {void}
     */
    function dfs(node, max, min){
        if(node.val>=max || node.val<=min){
            ans = false;
            return;
        }

        if(node.left){
            dfs(node.left, node.val, min);
        }

        if(node.right){
            dfs(node.right, max, node.val);
        }
    }

    dfs(root, max, min);

    return ans;
}


function test(rootArr, expected) {
    const root = array2TreeNode(rootArr);
    const actual = isValidBST(root);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('98. Validate Binary Search Tree', () => {
    it('98. 1', () => {test( [2,1,3],  true)});
    it('98. 2', () => {test( [5,1,4,null,null,3,6],  false)});
   
});
