const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

class RandomizedSet {
    constructor() {
        this.dict = new Map();
        this.arr = [];
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.dict.has(val)) {
            return false;
        }
        this.arr.push(val);
        this.dict.set(val, this.arr.length-1);

        return true;
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if(!this.dict.has(val)) {
            return false;
        }

        const index = this.dict.get(val);
        const last = this.arr[this.arr.length-1];
        this.arr[index] = last;
        this.arr.pop();
        this.dict.set(last, index);
        this.dict.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const randomIndex = _.random(this.arr.length-1);
        return this.arr[randomIndex];
    }
}

/**
 * 
 * @param {string[]} actions 
 * @param {array} params 
 * @param {array} expected 
 */
function test(actions, params, expected) {
    const rs = new RandomizedSet();
    for (let i=1;i<actions.length;i++) {
        console.log(i);
        switch(actions[i]){
            case 'insert':
                expect(rs.insert(...params[i])).to.be.eql(expected[i]);
                break;
            case 'remove':
                expect(rs.remove(...params[i])).to.be.eql(expected[i]);
                break;
            case 'getRandom':
                rs.getRandom(...params[i]);
                break;
        }
    }
}

describe('380. Insert Delete GetRandom O(1)', () => {
    it('380. 1', () => {test(
        ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"],
        [[], [1], [2], [2], [], [1], [2], []],
        [null, true, false, true, 2, true, false, 2]
    )});
    
    it('380. 2', () => {test(
        ["RandomizedSet","insert","insert","remove","insert","remove","getRandom"],
        [[],[0],[1],[0],[2],[1],[]],
        [null,true,true,true,true,true,2]
    )});
    // it('3', () => {test()});
});


/*
Runtime: 395 ms, faster than 88.32% of JavaScript online submissions for Insert Delete GetRandom O(1).
Memory Usage: 93.8 MB, less than 90.61% of JavaScript online submissions for Insert Delete GetRandom O(1).
*/