const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter (letters, target) {
    const n = letters.length;
    let left = 0;
    let right = n - 1;
    if (target>=letters[right]) {return letters[0];}
    let mid = 0;
    while(left<right) {
        mid = left +Math.floor((right-left)/2) ;
        if(letters[mid] <= target) {
            left = mid+1; 
        }  else {
            right = mid;
        }
    }
    return letters[right];
}

function test(letters, target, expected) {
    const actual = nextGreatestLetter (letters, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('744. Find Smallest Letter Greater Than Target', () => {
    it('744. 1', () => {test(["c","f","j"], 'a', 'c')});
    it('744. 2', () => {test(["c","f","j"], 'c', 'f')});
    it('744. 3', () => {test(["c","f","j"], 'd', 'f')});
    it('744. 4', () => {test(["c","f","j"], 'j', 'c')});
});


/*
Runtime: 56 ms, faster than 99.06% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 43 MB, less than 82.69% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
*/