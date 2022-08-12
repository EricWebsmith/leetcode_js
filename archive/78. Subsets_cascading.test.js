const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const output = [[]];
    for (const num of nums) {
        const newOutput = output.map(a => a.concat([num]));
        output.push(...newOutput);
    }
    return output;
}

function test(nums, expected) {
    const actual = subsets(nums);
    expect(actual).to.have.deep.members(expected);
}

describe('78. Subsets', () => {
    it('78. 1', () => {test( [1,2,3],  [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]])});
    it('78. 2', () => {test( [0],  [[],[0]])});
});


/*
Runtime: 56 ms, faster than 99.66% of JavaScript online submissions for Subsets.
Memory Usage: 43 MB, less than 80.81% of JavaScript online submissions for Subsets.
*/