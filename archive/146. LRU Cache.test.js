
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.q = new Queue();
        this.map = new Map();
        this.capacity = capacity;
        this.keyCounts = {};
        this.toDelete = {};
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            this.toDelete[key] = (this.toDelete[key]??0) + 1;
            this.q.enqueue(key);
            return this.map.get(key);
        }

        return -1;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.toDelete[key] = (this.toDelete[key] ?? 0) + 1;
        } else if (this.map.size === this.capacity) {
            let oldKey = this.q.dequeue();
            while (this.toDelete[oldKey] ?? 0 > 0) {
                this.toDelete[oldKey]--;
                oldKey = this.q.dequeue();
            }
            this.map.delete(oldKey);
        }

        this.q.enqueue(key);
        this.map.set(key, value);
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


function test(actions, params, expected) {
    const obj = new LRUCache(...params[0]);
    for (let i = 1; i < actions.length; i++) {
        console.log(actions[i], params[i])
        switch (actions[i]) {
            case 'put':
                expect(obj.put(...params[i]) ?? null).to.be.eql(expected[i]);
                break;
            case 'get':
                expect(obj.get(...params[i]) ?? null).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('146. LRU Cache', () => {
    it('146. 1', () => { test(["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"], [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]], [null, null, null, 1, null, -1, null, -1, 3, 4]) });

});

/*
Runtime: 667 ms, faster than 76.75% of JavaScript online submissions for LRU Cache.
Memory Usage: 96.3 MB, less than 83.20% of JavaScript online submissions for LRU Cache.
*/