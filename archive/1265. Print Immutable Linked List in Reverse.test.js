/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
function printLinkedListInReverse(head) {
    if(head == null) {
        return;
    }

    printLinkedListInReverse(head.getNext());
    head.printValue();
}


/*
Runtime: 81 ms, faster than 88.68% of JavaScript online submissions for Print Immutable Linked List in Reverse.
Memory Usage: 45.2 MB, less than 83.96% of JavaScript online submissions for Print Immutable Linked List in Reverse.
*/