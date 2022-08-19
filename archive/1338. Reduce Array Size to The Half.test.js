
const { expect } = require("chai");

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
    const n = arr.length;
    const counter = new Map();
    for (const num of arr) {
        counter.set(num, (counter.get(num) ?? 0) + 1);
    }

    const values = [...counter.values()]
    values.sort((a, b) => b - a);
    const half = n - (n >> 1);
    const ans = [];
    let sum = 0;
    for (const v of values) {
        ans.push(v);
        sum += v;
        if (sum >= half) {
            break;
        }
    }

    return ans.length;
}


function test(arr, expected) {

    const actual = minSetSize(arr);
    expect(actual).to.be.eql(expected);
}

describe('1338. Reduce Array Size to The Half', () => {
    it('1338. 1', () => { test([3, 3, 3, 3, 5, 5, 5, 2, 2, 7], 2) });
    it('1338. 2', () => { test([7, 7, 7, 7, 7, 7], 1) });
});


/*
Runtime: 114 ms, faster than 97.17% of JavaScript online submissions for Reduce Array Size to The Half.
Memory Usage: 68.8 MB, less than 33.96% of JavaScript online submissions for Reduce Array Size to The Half.
*/