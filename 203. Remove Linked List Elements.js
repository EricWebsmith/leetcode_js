function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const preHead = new ListNode(-1);
    preHead.next = head;
    let current = preHead;
    while(current.next){
        if(current.next.val === val){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }

    return preHead.next;
};

/*
Runtime: 91 ms, faster than 82.95% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 46.7 MB, less than 5.25% of JavaScript online submissions for Remove Linked List Elements.
*/