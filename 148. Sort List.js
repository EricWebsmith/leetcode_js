function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
    if (!head) {
        return head;
    }

    const nums = [];
    let current = head;
    while (current) {
        nums.push(current.val);
        current = current.next;
    }

    nums.sort((a, b)=>a-b);

    const newHead = new ListNode(nums[0]);
    current = newHead;
    for (let i = 1; i < nums.length; i++) {
        current.next = new ListNode(nums[i]);
        current = current.next;
    }

    return newHead;
}

