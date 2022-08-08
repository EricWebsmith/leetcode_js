
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

/*

a -> e
e -> a, i
i -> a, e, o, u
o -> i, u
u -> a

a -> 0
e -> 1
i -> 2
o -> 3
u -> 4

0 -> 1
1 -> 0, 2
2 -> 0, 1, 3, 4
3 -> 2, 4
4 -> 0


a -> e
e -> a, i
i -> a, e, o, u
o -> i, u
u -> a

*/

/**
 * @param {number} n
 * @return {number}
 */
function countVowelPermutation(n) {
    const a = 0;
    const e = 1;
    const i = 2;
    const o = 3;
    const u = 4;
    const MODULE = 1000000007;

    let currentBag = new Array(5).fill(1);
    for (let j=2;j<=n;j++) {
        let newBag = new Array(5).fill(0);
        // a 
        newBag[e] += currentBag[a] % MODULE;
        // e
        newBag[a] += currentBag[e] % MODULE;
        newBag[i] += currentBag[e] % MODULE;
        // i
        newBag[a] += currentBag[i] % MODULE;
        newBag[e] += currentBag[i] % MODULE;
        newBag[o] += currentBag[i] % MODULE;
        newBag[u] += currentBag[i] % MODULE;
        // o
        newBag[i] += currentBag[o] % MODULE;
        newBag[u] += currentBag[o] % MODULE;
        // u
        newBag[a] += currentBag[u] % MODULE;

        currentBag = newBag;
    }
    console.log(currentBag);
    return _.sum(currentBag) % MODULE;;
}


function test(n, expected) {
    
    const actual = countVowelPermutation(n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1220. Count Vowels Permutation', () => {
    it('1220. 1', () => {test( 1,  5)});
    it('1220. 2', () => {test( 2,  10)});
    it('1220. 3', () => {test( 5,  68)});
   
});


/*
Runtime: 81 ms, faster than 89.19% of JavaScript online submissions for Count Vowels Permutation.
Memory Usage: 48.6 MB, less than 56.76% of JavaScript online submissions for Count Vowels Permutation.
*/