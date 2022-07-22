
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode');
const { curry } = require("lodash");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    if(left === right) {
        return head;
    }

    const preHead = new ListNode(0);
    preHead.next = head;
    let current = preHead;
    let lastHead = current;
    for(let i=0;i<left;i++) {
        lastHead = current;
        current = current.next;
    }
    

    let reversed = null;
    let lastReversed = current;
    for(let i=left-1;i<=right-1;i++) {
        let temp = current;
        current = current.next;
        temp.next = reversed;
        reversed = temp;
    }

    lastHead.next = reversed;
    lastReversed.next = current;
    return preHead.next;
}

function test(headArr, left, right, expected) {
    const head = array2ListNode(headArr);
    const actualHead =  reverseBetween(head, left, right);
    const actual = listNode2Array(actualHead);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('92. Reverse Linked List II', () => {

    it('92. 1', () => {test([1,2,3,4,5],  2,  4, [1,4,3,2,5])});
    it('92. 2', () => {test([1,2,3,4,5],  2,  2, [1,2,3,4,5])});
    it('92. 3', () => {test([5],  1,  1, [5])});    
    it('92. 4', () => {test([3, 5],  1,  2, [5, 3])});    
});

/*
Runtime: 61 ms, faster than 93.80% of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 42 MB, less than 70.07% of JavaScript online submissions for Reverse Linked List II.
*/