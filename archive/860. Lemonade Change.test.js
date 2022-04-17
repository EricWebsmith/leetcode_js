const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange (bills) {
    //bills.sort((a,b) => a - b);
    let _5 = 0;
    let _10 = 0;
    for (const bill of bills) {
        if (_5<0 || _10<0) {
            return false;
        }

        switch(bill) {
            case 5:
                _5++;
                break;
            case 10:
                _10++;
                _5--;
                break;
            case 20:
                if (_10 >= 1) {
                    _10--;
                    _5--;
                } else {
                    _5-=3;
                }
        }
    }

    if (_5<0 || _10<0) {
        return false;
    }

    return true;
}

function test(...args) {
    const expected = args.pop();
    const actual = lemonadeChange (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('860. Lemonade Change', () => {
    it('860. 1', () => {test([5,5,5,10,20], true)});
    it('860. 2', () => {test([5,5,10,10,20], false)});
    it('860. 3', () => {test([5,5,5,5,20,20,5,5,5,5], false)});
});

/*
Runtime: 80 ms, faster than 92.70% of JavaScript online submissions for Lemonade Change.
Memory Usage: 51.2 MB, less than 19.34% of JavaScript online submissions for Lemonade Change.
*/