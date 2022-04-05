const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
    // find k-th
    let index = 0;
    let current = head;
    let nodeK = null;
    while(current) {
        index++;
        if (index === k) {
            nodeK = current;
        }
        current = current.next;
    }
    const n = index;
    
    // find (n-k)th
    index = 0;
    let nodeReverseK = null;
    current = head;
    while (current) {
        index++;
        if (n-k+1 === index) {
            nodeReverseK = current;
        }
        current = current.next;
    }

    const tempVal = nodeK.val;
    nodeK.val = nodeReverseK.val;
    nodeReverseK.val = tempVal;
    return head;
}

function test(headArr, k, expected) {
    const head = array2ListNode(headArr);
    const actual = swapNodes (head, k);
    const actualArray = listNode2Array(actual);
    console.log(actualArray, expected);
    expect(actualArray).to.be.eql(expected);
}

describe('1721. Swapping Nodes in a Linked List', () => {
    it('1', () => {test([1,2,3,4,5],2,[1,4,3,2,5])});
    it('2', () => {test([7,9,6,6,7,8,3,0,9,5],5,[7,9,6,6,8,7,3,0,9,5])});
    //it('3', () => {test()});
});

/*
Runtime: 448 ms, faster than 99.17% of JavaScript online submissions for Swapping Nodes in a Linked List.
Memory Usage: 78.8 MB, less than 96.11% of JavaScript online submissions for Swapping Nodes in a Linked List.
*/