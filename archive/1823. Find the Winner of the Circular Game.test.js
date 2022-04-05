const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findTheWinner(n, k) {
    let p = 0;
    for (let i=2;i<=n;i++) {
        p = (p+k) % i;
    }
    return p+1;
}

function test(n,k, expected) {
    const actual = findTheWinner(n,k);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('1823. Find the Winner of the Circular Game', () => {
    it('1823. 1', () => { test(5,2,3) });
    it('1823. 2', () => { test(6,5,1) });
    //it('1823. 3', () => { test() });
});
