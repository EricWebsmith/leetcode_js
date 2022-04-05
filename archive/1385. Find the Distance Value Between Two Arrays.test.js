const { expect } = require("chai");
const _ = require('lodash');
const { ListNode, TreeNode, array2TreeNode, array2ListNode, listNode2Array } = require('../leetcode')

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue (arr1, arr2, d) {
    //arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);

    let ans = arr1.length;
    for (const d1 of arr1) {
        let left = 0;
        let right = arr2.length - 1;
        while (left<=right) {
            const mid = left + Math.floor((right - left)/2);
            if (Math.abs(arr2[mid]-d1) <= d) {
                ans--;
                break;
            }
            if (arr2[mid]<d1) {
                left = mid+1;
            }
            else {
                right = mid - 1;
            }
        }
    }

    return ans;
}

function test(arr1, arr2, d, expected) {
    const actual = findTheDistanceValue (arr1, arr2, d);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1385. Find the Distance Value Between Two Arrays', () => {
    it('1385. 1', () => {test([4,5,8], [10,9,1,8], 2, 2)});
    it('1385. 2', () => {test([1,4,2,3], [-4,-3,6,10,20,30], 3, 2)});
    it('1385. 3', () => {test([2,1,100,3], [-5,-2,10,-3,7], 6, 1)});
    it('1385. 4', () => {test([4,-3,-7,0,-10],[10],69,0)});
    it('1385. 5', () => {test(
        [-803,715,-224,909,121,-296,872,807,715,407,94,-8,572,90,-520,-867,485,-918,-827,-728,-653,-659,865,102,-564,-452,554,-320,229,36,722,-478,-247,-307,-304,-767,-404,-519,776,933,236,596,954,464],
        [817,1,-723,187,128,577,-787,-344,-920,-168,-851,-222,773,614,-699,696,-744,-302,-766,259,203,601,896,-226,-844,168,126,-542,159,-833,950,-454,-253,824,-395,155,94,894,-766,-63,836,-433,-780,611,-907,695,-395,-975,256,373,-971,-813,-154,-765,691,812,617,-919,-616,-510,608,201,-138,-669,-764,-77,-658,394,-506,-675,523,730,-790,-109,865,975,-226,651,987,111,862,675,-398,126,-482,457,-24,-356,-795,-575,335,-350,-919,-945,-979,611],
        37,0)});
});


/*
Runtime: 56 ms, faster than 98.04% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
Memory Usage: 43.1 MB, less than 66.67% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
*/