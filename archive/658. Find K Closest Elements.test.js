
const { expect } = require("chai");


/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
    const n = arr.length;
    let left = 0;
    let right = n;
    while (left < right) {
        const m = (left + right) >> 1;
        if(arr[m]<x){
            left = m + 1;
        } else {
            right = m;
        }
    }
    left--;

    let l = 0;
    while(l<k) {
        if (right == n || (left>=0 && x - arr[left] <= arr[right] - x)){
            left--;
        } else {
            right++;
        }
        l++;
    }

    return arr.slice(left+1, right);
}


function test(arr, k, x, expected) {

    const actual = findClosestElements(arr, k, x);
    //if (actual !== expected) {
    //    console.log(actual, expected);
    //}
    expect(actual).to.be.eql(expected);
}

describe('658. Find K Closest Elements', () => {
    it('658. 1', () => { test([1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4]) });
    it('658. 2', () => { test([1, 2, 3, 4, 5], 4, -1, [1, 2, 3, 4]) });

});

/*
Runtime: 159 ms, faster than 44.07% of JavaScript online submissions for Find K Closest Elements.
Memory Usage: 47.7 MB, less than 84.91% of JavaScript online submissions for Find K Closest Elements.
*/