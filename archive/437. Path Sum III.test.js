
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
function pathSum(root, targetSum) {
    let ans = 0;
    const dfs = (node, sums)=> {
        if (node == null) {
            return;
        }

        for (let i=0;i<sums.length;i++) {
            sums[i] = sums[i] + node.val;
            if (sums[i] === targetSum) {
                ans++;
            }
        }

        if (node.val === targetSum) {
            ans++;
        }

        sums.push(node.val);
        const sumsCopy1 = [...sums];
        dfs(node.left, sumsCopy1);

        const sumsCopy2 = [...sums];
        dfs(node.right, sumsCopy2);
    }

    dfs(root, []);
    return ans;
}


function test(rootArr, targetSum, expected) {
    const root = array2TreeNode(rootArr);
    const actual = pathSum(root, targetSum);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('437. Path Sum III', () => {
    it('437. 1', () => {test( [10,5,-3,3,2,null,11,3,-2,null,1], 8,  3)});
    it('437. 2', () => {test( [5,4,8,11,null,13,4,7,2,null,null,5,1], 22,  3)});
   
});


/*
Runtime: 120 ms, faster than 77.42% of JavaScript online submissions for Path Sum III.
Memory Usage: 63.1 MB, less than 10.97% of JavaScript online submissions for Path Sum III.
*/