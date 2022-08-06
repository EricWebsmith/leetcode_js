
const { expect } = require("chai");
const { ListNode, array2ListNode, listNode2Array } = require('../leetcode');


/*
2 4 3
5 6 4

*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const preHead = new ListNode(-1);
    let current = preHead;

    let carry = 0;
    while (l1 != null || l2 != null) {
        let value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        if (value >= 10) {
            value = value % 10;
            carry = 1;
        } else {
            carry = 0;
        }

        const newCurrent = new ListNode(value);
        current.next = newCurrent;
        current = newCurrent;

        if (l1 != null) {
            l1 = l1.next;
        }

        if (l2 != null) {
            l2 = l2.next;
        }
    }

    if (carry === 1) {
        current.next = new ListNode(1);
    }

    return preHead.next;
}


function test(l1Arr, l2Arr, expected) {
    const l1 = array2ListNode(l1Arr);
    const l2 = array2ListNode(l2Arr);
    const actualHead = addTwoNumbers(l1, l2);
    const actual = listNode2Array(actualHead)
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('2. Add Two Numbers', () => {
    it('2. 1', () => { test([2, 4, 3], [5, 6, 4], [7, 0, 8]) });
    it('2. 2', () => { test([0], [0], [0]) });
    it('2. 3', () => { test([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]) });

});
