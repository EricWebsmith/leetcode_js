
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

class Person {
    constructor(delay, forget, count = 1) {
        this.delay = delay;
        this.forget = forget;
        this.count = BigInt(count);
    }
}

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
function peopleAwareOfSecret(n, delay, forget) {
    const persons = [new Person(delay - 1, forget - 1, 1)];

    for (let day = 1; day < n; day++) {
        let count = BigInt(0);
        while (persons[0] && persons[0].forget === 0) {
            persons.shift();
        }

        for (let i = 0; i < persons.length; i++) {
            if (persons[i].delay > 0) {
                persons[i].delay--;
                persons[i].forget--;
            } else if (persons[i].forget > 0) {
                persons[i].forget--;
                count += persons[i].count;
            }
        }

        persons.push(new Person(delay - 1, forget - 1, count));
    }

    let ans = BigInt(0);
    for (const p of persons) {
        ans += BigInt(p.count);
    }

    return Number(ans % BigInt(1000000007));
};

function test(...args) {
    const expected = args.pop();
    const actual = peopleAwareOfSecret(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6109. Number of People Aware of a Secret', () => {
    it('6109. 1', () => { test(6, 2, 4, 5) });
    it('6109. 2', () => { test(4, 1, 3, 6) });
    it('6109. 3', () => { test(684, 18, 496, 653668527) });
});

