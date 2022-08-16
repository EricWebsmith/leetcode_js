
const { expect } = require("chai");

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const n = s.length;
    let ans = 0;
    let iSign = 1;
    let xSign = 1;
    let cSign = 1;
    for (let i = n - 1; i >= 0; i--) {
        switch (s[i]) {
            case 'I':
                ans += iSign * 1;
                break;
            case 'V':
                ans += 5
                iSign = -1;
                break;
            case 'X':
                ans += xSign * 10;
                iSign = -1;
                break;
            case 'L':
                ans += 50;
                xSign = -1;
                break;
            case 'C':
                ans += cSign * 100;
                xSign = -1;
                break;
            case 'D':
                ans += 500;
                cSign = -1;
                break;
            case 'M':
                ans += 1000;
                cSign = -1;
                break;
        }
    }

    return ans;
}


function test(s, expected) {

    const actual = romanToInt(s);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('13. Roman to Integer', () => {
    it('13. 1', () => { test("III", 3) });
    it('13. 2', () => { test("LVIII", 58) });
    it('13. 3', () => { test("MCMXCIV", 1994) });
});
