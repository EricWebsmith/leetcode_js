
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
function spiralMatrix(m, n, head) {
    const matrix = [];
    for (let r = 0; r < m; r++) {
        const row = [];
        for (let c = 0; c < n; c++) {
            row.push(-1);
        }
        matrix.push(row);
    }

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = m - 1;

    let loop = 0;
    let currentX = 0;
    let currentY = 0;
    let currentNode = head;
    while (true) {
        const dirIndex = loop % 4;
        const currentDir = directions[dirIndex];

        if ((dirIndex === 0 && currentX === right)) {
            top++;
            loop++;
            continue;
        } else if ((dirIndex === 1 && currentY === bottom)) {
            right--;
            loop++;
            continue;
        } else if ((dirIndex === 2 && currentX === left)) {
            bottom--;
            loop++;
            continue;
        } else if ((dirIndex === 3 && currentY === top)) {
            left++;
            loop++;
            continue;
        }

        matrix[currentY][currentX] = currentNode.val;
        if (currentNode.next == null) {
            return matrix;
        }

        currentX = currentX + directions[dirIndex][0];
        currentY = currentY + directions[dirIndex][1];
        currentNode = currentNode.next;
    }

    return matrix;
}

function test(...args) {
    const expected = args.pop();
    const [m, n, headArr] = args;
    const head = array2ListNode(headArr);
    const actual = spiralMatrix(m, n, head);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6111. Spiral Matrix IV', () => {

    it('6111. 1', () => { test(3, 5, [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0], [[3, 0, 2, 6, 8], [5, 0, -1, -1, 1], [5, 2, 4, 9, 7]]) });
    it('6111. 2', () => { test(1, 4, [0, 1, 2], [[0, 1, 2, -1]]) });
});

