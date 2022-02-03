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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let list3 = new ListNode();
    let p3 = list3;
    let p1 = list1;
    let p2 = list2;
    while(p1 && p2){
        if(p1.val<p2.val){
            p3.next = new ListNode(p1.val);
            p3 = p3.next;
            p1 = p1.next;
        }
        else{
            p3.next = new ListNode(p2.val);
            p3 = p3.next;
            p2 = p2.next;
        }
    }

    if(p1){
        p3.next = p1;
    } else if(p2){
        p3.next = p2;
    }

    return list3.next;
};

/*
Runtime: 76 ms, faster than 95.16% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 43.8 MB, less than 9.88% of JavaScript online submissions for Merge Two Sorted Lists.
*/