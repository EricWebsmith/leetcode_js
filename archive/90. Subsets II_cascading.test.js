
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
    const counts = new Map();
    for (const num of nums) {
        const oldValue = counts.get(num) ?? 0;
        counts.set(num, oldValue+1);
    }

    const output = [[]];
    for (const [num, count] of counts.entries()) {
        let newOutput = output.map(a=>a.concat([num]));
        output.push(...newOutput);
        for (let c=1;c<count;c++) {
            newOutput = newOutput.map(a=>a.concat([num]));
            output.push(...newOutput);
        }
    }

    return output;
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