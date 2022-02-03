/**
 * 
 * @param {number} val 
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null) { return false; }
    let slow = head;
    let fast = head;
    while (true) {

        if (fast && fast.next) {
            fast = fast.next.next;
        } else {
            return false;
        }

        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }
};