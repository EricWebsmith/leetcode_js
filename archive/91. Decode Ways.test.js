
const { expect } = require("chai");


function oneStep(s, i) {
    return s[i] == '0' ? 0 : 1;
}

/**
 * 
 * @param {string} s 
 * @param {number} i 
 * @returns 
 */
function twoSteps(s, i) {
    if (s[i + 0] == '0') {
        return 0;
    }

    if (s[i + 0] == '1') {
        return 1;
    }

    if (s[i + 0] == '2' && s[i + 1] >= '0' && s[i + 1] <= '6') {
        return 1;
    }

    return 0;
}

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    const n = s.length;
    if (n === 1) {
        return oneStep(s, 0);
    }

    let a = 1;
    let b = oneStep(s, 0)
    let c = 0;

    for (let i = 2; i <= n; i++) {
        c = a * twoSteps(s, i - 2) + b * oneStep(s, i - 1);
        a = b;
        b = c;
    }

    return c;
}


function test(s, expected) {

    const actual = numDecodings(s);
    //if (actual !== expected) {
    //    console.log(actual, expected);
    //}
    expect(actual).to.be.eql(expected);
}

describe('91. Decode Ways', () => {
    it('91. 1', () => { test("12", 2) });
    it('91. 2', () => { test("226", 3) });
    it('91. 3', () => { test("06", 0) });

});
