
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/*
闭区间：[]
开区间：()
闭开区间：[)
*/

class MyCalendar {
    constructor() {
        this.invertals = [];
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        let insertPoint = -1;
        for (let i=0;i<this.invertals.length;i++) {
            const oldStart = this.invertals[i][0];
            const oldEnd = this.invertals[i][1];
            if (insertPoint===-1 && oldStart>=start) {
                insertPoint = i;
                
            }

            if (oldStart>end) {
                break;
            }
            const double = (start>=oldStart && start<oldEnd) ||
                (end>oldStart && end<=oldEnd) ||
                (oldStart>=start && oldStart<end) ||
                (oldEnd>start && oldEnd<=end);
            if (double) {
                return false;
            }
        }

        if(insertPoint === -1) {
            this.invertals.push([start, end]);
        } else {
            this.invertals.splice(insertPoint, 0, [start, end]);
        }
        
        return true;
    }
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */


function test(actions, params, expected) {
    const obj = new MyCalendar(...params[0]);
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
            case 'book':
                expect(obj.book(...params[i])??null).to.be.eql(expected[i]);
                break;

        }
    }
}

describe('729. My Calendar I', () => {
    it('729. 1', () => {test(["MyCalendar", "book", "book", "book"], [[], [10, 20], [15, 25], [20, 30]], [null, true, false, true])});
    it('729. 2', () => {test(
        ["MyCalendar","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book"],
        [[],[20,29],[13,22],[44,50],[1,7],[2,10],[14,20],[19,25],[36,42],[45,50],[47,50],[39,45],[44,50],[16,25],[45,50],[45,50],[12,20],[21,29],[11,20],[12,17],[34,40],[10,18],[38,44],[23,32],[38,44],[15,20],[27,33],[34,42],[44,50],[35,40],[24,31]],
        [null,true,false,true,true,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    )});
   
});

/*
Runtime: 190 ms, faster than 83.33% of JavaScript online submissions for My Calendar I.
Memory Usage: 51.1 MB, less than 50.00% of JavaScript online submissions for My Calendar I.
*/