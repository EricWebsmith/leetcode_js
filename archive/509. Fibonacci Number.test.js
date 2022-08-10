
const { expect } = require("chai");

/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n === 0) { return 0; }
    if (n <= 2) { return 1; }
    let a = 1;
    let b = 1;
    let c = 0;

    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}


function test(n, expected) {

    const actual = fib(n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('509. Fibonacci Number', () => {
    it('509. 1', () => { test(2, 1) });
    it('509. 2', () => { test(3, 2) });
    it('509. 3', () => { test(4, 3) });

});


/*
Runtime: 57 ms, faster than 98.36% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 41.9 MB, less than 58.10% of JavaScript online submissions for Fibonacci Number.
*/