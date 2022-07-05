
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const set = new Set(nums);
    let output = 0;

    for (const n of set) {
        if(!set.has(n-1)) {
            let start = n;
            while(set.has(start)) {
                start++;
            }
            output = Math.max(output, start-n);
        }
    }
    return output;
}

function test(...args) {
    const expected = args.pop();
    const actual = longestConsecutive (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('128. Longest Consecutive Sequence', () => {

    it('128. 1', () => {test([100,4,200,1,3,2], 4)});
    it('128. 2', () => {test([0,3,7,2,5,8,4,6,0,1], 9)});    
});

/*
Runtime: 101 ms, faster than 96.78% of JavaScript online submissions for Longest Consecutive Sequence.
Memory Usage: 57.5 MB, less than 57.73% of JavaScript online submissions for Longest Consecutive Sequence.
*/