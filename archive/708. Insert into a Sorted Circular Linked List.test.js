const { expect } = require("chai");
const { ListNode: Node, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
function insert(head, insertVal) {
    const newNode = new Node(insertVal);
    if (head == null) {
        newNode.next = newNode;
        return newNode;
    }

    // find small head
    let current = head;
    let smallHead = head;
    let preSmallHead = null;
    while (current.next != head) {
        if (current.next.val < current.val) {
            preSmallHead = current;
            smallHead = current.next;
            break;
        }
        current = current.next;
    }

    if (smallHead === head) {
        preSmallHead = current;
    }

    // insert
    if (insertVal <= smallHead.val || preSmallHead.val < insertVal) {
        preSmallHead.next = newNode;
        newNode.next = smallHead;
        return head;
    }

    current = smallHead;
    while (current.next != smallHead) {
        if (current.next.val >= newNode.val) {
            newNode.next = current.next;
            current.next = newNode;
            return head;
        }
        current = current.next;
    }

    return head;
}

function test(headArray, insertVal, expected) {
    const head = array2ListNode(headArray)
    if (head) {
        let current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = head;
    }

    const newHead = insert(head, insertVal)
    const actual = listNode2Array(newHead);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('708. Insert into a Sorted Circular Linked List', () => {
    it('1', () => { test([3, 4, 1], 2, [3, 4, 1, 2]) });
    it('2', () => { test([], 1, [1]) });
    it('3', () => { test([1], 0, [1, 0]) });
    it('4', () => { test([1, 3, 5], 2, [1, 2, 3, 5]) });
    it('5', () => { test([3, 5, 1], 5, [3, 5, 5, 1]) });
});


/*
Runtime: 64 ms, faster than 93.87% of JavaScript online submissions for Insert into a Sorted Circular Linked List.
Memory Usage: 43.7 MB, less than 94.81% of JavaScript online submissions for Insert into a Sorted Circular Linked List.
*/