/**
 * 
 * @param {number} val 
 * @param {ListNode} next 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if(head==null) {return head;}
    let current = head;
    while(current.next){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }

    return head;
};

/*
Runtime: 64 ms, faster than 99.85% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 44.3 MB, less than 6.90% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/