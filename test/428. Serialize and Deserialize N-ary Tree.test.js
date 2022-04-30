const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');

/**
 * 
 * @param {number} val 
 * @param {Node[]} children 
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
}

class Codec {
    constructor() {

    }

    /** 
     * @param {Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize(root) {
        if (root === null) { return JSON.stringify([]); }
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

        return JSON.stringify(arr);
    };

    /** 
     * @param {string} data 
     * @return {Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize(data) {
        const arr = JSON.parse(data);
        if (!arr || arr.length === 0) { return null; }
        const head = new Node(arr[0], []);
        const q = new Queue([head]);
        let current = null;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === null) {
                current = q.dequeue();
                continue;
            }
            const newNode = new Node(arr[i], []);
            current.children.push(newNode);
            q.enqueue(newNode);
        }
        return head;
    };
}

function test(expected) {
    const serializer = new Codec();
    const node = serializer.deserialize(expected)
    const actual = serializer.serialize(node)
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('428. Serialize and Deserialize N-ary Tree', () => {
    it('428. 1', () => { test("[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]") });
    it('428. 2', () => { test("[1,null,3,2,4,null,5,6]") });
    it('428. 3', () => { test("[]") });
});


/*
Runtime: 101 ms, faster than 85.23% of JavaScript online submissions for Serialize and Deserialize N-ary Tree.
Memory Usage: 47.8 MB, less than 76.14% of JavaScript online submissions for Serialize and Deserialize N-ary Tree.
*/