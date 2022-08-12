
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    const keys = [...Object.keys(counts)]

    const ans = [];
    const backtrack = (current, index) => {
        
        if (index === keys.length) {
            ans.push([...current]);
            return;
        }

        // continue without add key
        backtrack(current, index + 1);

        // continue with adding 1 key, 2 keys ... 
        const key = parseInt(keys[index]);
        for (let c = 1; c <= counts[key]; c++) {
            current.push(parseInt(key));
            backtrack(current, index + 1);
        }

        for (let c = 1; c <= counts[key]; c++) {
            current.pop();
        }
    }

    backtrack([], 0);

    return ans;
}


function test(nums, expected) {

    const actual = subsetsWithDup(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.have.deep.members(expected);
}

describe('90. Subsets II', () => {
    it('90. 1', () => { test([1, 2, 2], [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]) });
    it('90. 2', () => { test([0], [[], [0]]) });

});


/*
Runtime: 75 ms, faster than 90.12% of JavaScript online submissions for Subsets II.
Memory Usage: 45.2 MB, less than 18.46% of JavaScript online submissions for Subsets II.
*/