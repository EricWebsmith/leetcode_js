const { Queue } = require('@datastructures-js/queue');

/*
array2Node and node2Array is one of the leetcode questions: 
428. Serialize and Deserialize N-ary Tree
*/

/**
 * 
 * @param {number} val 
 * @param {Node[]} children 
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * 
 * @param {number[]} arr 
 * @returns {Node}
 */
function array2Node(arr) {
    if (!arr || arr.length === 0) {return null;}
    const head = new Node(arr[0]);
    const q = [head];
    let current = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === null) {
            current = q.shift();
            continue;
        }
        const newNode = new Node(arr[i]);
        current.children.push(newNode);
        q.push(newNode);
    }
    return head;
}

/**
 * 
 * @param {Node} root 
 * @returns {number[]}
 */
function node2Array(root) {
    if (!root) { return [];}
    const arr = [root.val];
    const q = new Queue([root]);
    while (!q.isEmpty()) {
        const qSize = q.size();
        for (let i = 0; i < qSize; i++) {
            const node = q.dequeue();
            arr.push(null);
            for (const child of node.children) {
                arr.push(child.val);
                q.enqueue(child);
            }
        }
    }

    //trim end
    while(arr[arr.length-1] === null){
        arr.pop();
    }

    return arr;
}

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
 * 
 * @param {number} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function treeNode2Array (root) {
    if (root === null) {return [];}
    const q = [root];
    const ans = [];
    while(q.length > 0) {
        const node = q.shift();
        if (node){
            ans.push(node.val);
            q.push(node.left);
            q.push(node.right);
        } else {
            ans.push(null);
        }
    }

    while(ans[ans.length-1] === null) {
        ans.pop();
    }

    return ans;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} array
 * @return {TreeNode}
 */
function array2TreeNode(array) {
    if (!array || array.length === 0) {
        return null;
    }
    const n = array.length;
    const root = new TreeNode(array[0]);
    const q = [root];
    for (let i = 1; i < n; i += 2) {
        let node = q.shift();

        let left = null;
        if (array[i] !== null) {
            left = new TreeNode(array[i]);
            node.left = left;
            q.push(left);
        }


        let right = null;
        if (i + 1 < n && array[i + 1] !== null) {
            right = new TreeNode(array[i + 1]);
            node.right = right;
            q.push(right);
        }

    }

    return root;
}

/**
 * 
 * @param {number[]} array 
 * @returns {ListNode}
 */
function array2ListNode(array) {
    if (array === null) { return null; }
    if (array === undefined) { return undefined; }
    if (array.length === 0) { return null; }

    const head = new ListNode(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return head;
}

/**
 * 
 * @param {ListNode} head 
 */
function listNode2Array(head) {
    const array = [];
    let current = head;
    while (current) {
        array.push(current.val);
        current = current.next;
    }
    return array;
}

module.exports = {
    Node, array2Node, node2Array,
    ListNode, array2ListNode, listNode2Array,
    TreeNode, array2TreeNode, treeNode2Array
}