const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
function groupThePeople(groupSizes) {
    const ans = [];
    const cache = {};
    for (let i = 0; i < groupSizes.length; i++) {
        const group = groupSizes[i];
        cache[group] = cache[group] ?? [];

        cache[group].push(i);
        if (cache[group].length === group) {
            ans.push(cache[group]);
            cache[group] = [];
        }
    }

    return ans;
}


function test(groupSizes, expected) {
    
    const actual = groupThePeople(groupSizes);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.have.deep.members(expected);
}

describe('1282. Group the People Given the Group Size They Belong To', () => {
    it('1282. 1', () => {test( [3,3,3,3,3,1,3],  [[5],[0,1,2],[3,4,6]])});
    it('1282. 2', () => {test( [2,1,3,3,3,2],  [[1],[0,5],[2,3,4]])});
});

/*
Runtime: 89 ms, faster than 95.83% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
Memory Usage: 47.4 MB, less than 40.63% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
*/