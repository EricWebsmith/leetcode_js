function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let previous = null;
    let current = head;
    while(current){
        const t = current.next;
        current.next = previous;
        previous = current;
        current = t;
    }

    return previous;
};

/*
Runtime: 79 ms, faster than 75.90% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44 MB, less than 6.17% of JavaScript online submissions for Reverse Linked List.
*/