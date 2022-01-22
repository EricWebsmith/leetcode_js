

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let p = new ListNode(0, null);
    p.next = head;

    let slow = p;
    let fast = p.next;
    while(fast!=undefined){
        if(fast.next!=undefined && fast.val==fast.next.val){
            while(fast.next!=undefined && fast.val==fast.next.val){
                fast = fast.next;
            }
            slow.next = fast.next;
            fast = fast.next;
        }
        else{
            slow = fast;
            fast = fast.next;
            
        }
    }

    return p.next;
};

console.log("----------------");
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
console.log(deleteDuplicates(head));

console.log("----------------");
head = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))));
console.log(deleteDuplicates(head));

console.log("----------------");
head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(deleteDuplicates(head));