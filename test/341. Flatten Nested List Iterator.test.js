const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function(nestedList) {
    this.nestedList = nestedList;
    /**
     * @type {iterator}
     */
    this.iterator = this.create_iterator();
    this.nextObj = this.iterator.next();
};

NestedIterator.prototype.create_iterator = function* () {
    const stack = [];
    let current = this.nestedList;
    while(current) {
        if (!Number.isInteger(current)) {
            if (current.length > 1) {
                stack.push(current);
                current = current.shift();
            } else {
                current = current[0];
            }            
        } else {
            yield current;
            current = stack.pop();
        }
    }
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return !this.nextObj.done;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    const ans = this.nextObj.value;
    this.nextObj = this.iterator.next();
    return ans;
};

// const i = new NestedIterator([[1,1],2,[1,1]]);
// const actual = [];
// while (i.hasNext()) {actual.push(i.next())};
// console.log(actual);

function test(nestedList, expected) {
    const i = new NestedIterator(nestedList);
    const actual = [];
    while (i.hasNext()) {actual.push(i.next())};


    if (actual.toString() !== expected.toString()) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('341. Flatten Nested List Iterator', () => {
    it('341. 1', () => {test([[1,1],2,[1,1]], [1,1,2,1,1])});
    it('341. 2', () => {test([1,[4,[6]]], [1,4,6])});
    //it('341. 3', () => {test()});
});
