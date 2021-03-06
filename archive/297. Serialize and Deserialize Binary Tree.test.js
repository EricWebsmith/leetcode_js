const { expect } = require("chai");
const _ = require('lodash');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const Queue = function () {
    this.first = null;
    this.last = null;
    this.size = 0;
};

const Node = function (data) {
    this.data = data;
    this.next = null;
};

Queue.prototype.enqueue = function (data) {
    const node = new Node(data);
    if(this.last) {
        this.last.next = node;
        this.last = node;
    }

    if (!this.first) {
        this.first = node;
        this.last = node;
    }

    this.size += 1;
    return node;
};

Queue.prototype.dequeue = function () {
    temp = this.first;
    this.first = this.first.next;
    if (!this.first) {
        this.last = null;
    }
    this.size -= 1;
    return temp.data;
};


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize (root) {
    if (root === null) {return '[]';}
    const q = new Queue();
    q.enqueue(root);
    const ans = [];
    while(q.size > 0) {
        const node = q.dequeue();
        if (node){
            ans.push(node.val);
            q.enqueue(node.left);
            q.enqueue(node.right);
        } else {
            ans.push(null);
        }
    }

    while(ans[ans.length-1] === null) {
        ans.pop();
    }

    return JSON.stringify(ans);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize (data) {
    const array = JSON.parse(data);
    const n = array.length;
    if (!array || array.length === 0) {
        return null;
    }
    const root = new TreeNode(array[0]);
    const q = new Queue();
    q.enqueue(root)
    for (let i = 1; i < n; i+=2) {
        let node = q.dequeue();

        let left = null;
        if (array[i] !== null) {
            left = new TreeNode(array[i]);
            node.left = left;
            q.enqueue(left);
        }


        let right = null;
        if (i+1<n && array[i+1] !== null) {
            right = new TreeNode(array[i+1]);
            node.right = right;
            q.enqueue(right);
        }

    }

    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function test(expected) {
    const root = deserialize (expected);
    console.log(root);
    const actual = serialize(root);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('297. Serialize and Deserialize Binary Tree', () => {
    it('297. 1', () => {test('[1,2,3,null,null,4,5]')});
    it('297. 2', () => {test('[]')});
    it('297. 3', () => {test('[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]')});
    it('297. 4', () => {test('[1,2,3,null,null,4,5,null,null,6,7]')});
    it('297. 5', () => {test('[1,2,3,null,null,4,5,6,7]')});
    it('297. 6', () => {test('[1,2]')});
});


/*
Runtime: 96 ms, faster than 99.26% of JavaScript online submissions for Serialize and Deserialize Binary Tree.
Memory Usage: 53.9 MB, less than 46.20% of JavaScript online submissions for Serialize and Deserialize Binary Tree.
*/