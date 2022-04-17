const { expect } = require("chai");
const { curryRight } = require("lodash");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, treeNode2Array, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function trimBST(root, low, high) {
    let current = root;
    let newRoot = null;
    while (current) {
        if (current.val > high) {
            current = current.left;
        } else if (current.val < low) {
            current = current.right
        } else {
            newRoot = current
            break;
        }
    }

    // prune left
    current = newRoot;
    while (current && current.left) {
        if (current.left.val < low) {
            current.left = current.left.right
        } else {
            current = current.left;
        }
    }

    // prune right
    current = newRoot;
    while (current && current.right) {
        if (current.right.val > high) {
            current.right = current.right.left;
        } else {
            current = current.right;
        }
    }
    return newRoot;
}

function test(rootArray, low, high, expected) {
    const root = array2TreeNode(rootArray);
    const actualRoot = trimBST(root, low, high);
    const actual = treeNode2Array(actualRoot)
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('669. Trim a Binary Search Tree', () => {
    it('669. 1', () => { test([1, 0, 2], 1, 2, [1, null, 2]) });
    it('669. 2', () => { test([3, 0, 4, null, 2, null, null, 1], 1, 3, [3, 2, null, 1]) });
    it('669. 3', () => { test([3, 1, 4, null, 2], 3, 4, [3, null, 4]) });
    it('669. 4', () => { test([3, 2, 4, 1], 1, 1, [1]) });
    it('669. 5', () => {
        test([45, 30, 46, 10, 36, null, 49, 8, 24, 34, 42, 48, null, 4, 9, 14, 25, 31, 35, 41, 43, 47, null, 0, 6, null, null, 11, 20, null, 28, null, 33, null, null, 37, null, null, 44, null, null, null, 1, 5, 7, null, 12, 19, 21, 26, 29, 32, null, null, 38, null, null, null, 3, null, null, null, null, null, 13, 18, null, null, 22, null, 27, null, null, null, null, null, 39, 2, null, null, null, 15, null, null, 23, null, null, null, 40, null, null, null, 16, null, null, null, null, null, 17],
            32, 44,
            [36, 34, 42, 33, 35, 41, 43, 32, null, null, null, 37, null, null, 44, null, null, null, 38, null, null, null, 39, null, 40]
        )
    });

    it('669. 6', () => { test([3], 2, 2, []) });
});


/*
Runtime: 70 ms, faster than 97.32% of JavaScript online submissions for Trim a Binary Search Tree.
Memory Usage: 48 MB, less than 57.14% of JavaScript online submissions for Trim a Binary Search Tree.
*/