
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    if (head==null) {
        return null;
    }

    const preHead = new ListNode(-1);
    preHead.next = head;
    let previous = preHead;
    let current = head;
    let insertLeft = null;
    let insertRight = null;
    const subHead = new ListNode(-1);
    let subCurrent = subHead;
    while (current != null) {
        if (insertLeft == null && current.val >= x) {
            insertLeft = previous;
            insertRight = current;
        }

        if (current.val < x) {
            previous.next = current.next;
            current.next = null;
            subCurrent.next = current;
            subCurrent = subCurrent.next;

            current = previous.next;
        } else {
            previous = current;
            current = current.next;
        }
    }

    if (subCurrent!==subHead) {
        if (insertLeft==null ) {
            preHead.next = subHead.next;
        } else {
            insertLeft.next = subHead.next;
            subCurrent.next = insertRight;
        }
    }
    return preHead.next;
}

function test(headArr, x, expected) {
    const head = array2ListNode(headArr);
    const actualHead = partition(head, x);
    const actual = listNode2Array(actualHead);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('86. Partition List', () => {

    it('86. 1', () => { test([1, 4, 3, 2, 5, 2], 3, [1, 2, 2, 4, 3, 5]) });
    it('86. 2', () => { test([2, 1], 2, [1, 2]) });
    it('86. 3', () => { test([], 0, []) });
    it('86. 4', () => { test([1,4,3,0,5,2], 2, [1,0,4,3,5,2]) });
    it('86. 5', () => { test([1], 0, [1]) });
    it('86. 6', () => { test([1], 2, [1]) });
});

/*
Runtime: 69 ms, faster than 89.56% of JavaScript online submissions for Partition List.
Memory Usage: 43.7 MB, less than 76.52% of JavaScript online submissions for Partition List.
*/