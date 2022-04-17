const { expect } = require("chai");
const _ = require('lodash');
const { TreeNode, array2TreeNode, ListNode, array2ListNode, listNode2Array } = require('../leetcode')


/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */
function reverse (head) {
    let current = head;
    let previous = null;
    let next = null;
    while(current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers (l1, l2) {
    const l1Reverse = reverse(l1);
    const l2Reverse = reverse(l2);
    let l1Current = l1Reverse;
    let l2Current = l2Reverse;
    const l3ReversePrehead = new ListNode(0);
    let l3Current = l3ReversePrehead;
    let carry = 0;
    while(l1Current && l2Current) {
        const rawVal = l1Current.val + l2Current.val + carry;
        carry = Math.trunc(rawVal / 10);
        const val = rawVal % 10;
        l3Current.next = new ListNode(val);
        l3Current = l3Current.next;
        l1Current = l1Current.next;
        l2Current = l2Current.next;
    }

    if (l1Current) {
        l3Current.next = l1Current;
    } else {
        l3Current.next = l2Current;
    }

    if (l3Current.next === null) {

    }
    // Carry
    while (carry>0) {
        if (l3Current.next) {
            l3Current = l3Current.next;
            const rawVal = l3Current.val + carry;
            carry = Math.trunc(rawVal / 10);
            const val = rawVal % 10;
            l3Current.val = val;
        } else {
            l3Current.next = new ListNode(carry);
            break;
        }
    }

    const l3 = reverse(l3ReversePrehead.next);
    return l3;
}

function test(l1Array, l2Array, expected) {
    const l1 = array2ListNode(l1Array);
    const l2 = array2ListNode(l2Array);
    const actual = listNode2Array(addTwoNumbers (l1, l2));
    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('445. Add Two Numbers II', () => {
    it('445. 1', () => {test([7,2,4,3], [5,6,4], [7,8,0,7])});
    it('445. 2', () => {test([2,4,3], [5,6,4], [8,0,7])});
    it('445. 3', () => {test([0], [0], [0])});
    it('445. 4', () => {test([5], [5], [1,0])});
});

/*
Runtime: 89 ms, faster than 99.07% of JavaScript online submissions for Add Two Numbers II.
Memory Usage: 47.8 MB, less than 53.61% of JavaScript online submissions for Add Two Numbers II.
*/