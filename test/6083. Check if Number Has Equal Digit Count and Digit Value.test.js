const { expect } = require("chai");

/**
 * @param {string} num
 * @return {boolean}
 */
function digitCount (num) {
    const obj = {};
    for (const c of num) {
        if (obj.hasOwnProperty(c)) {
            obj[c]++;
        } else {
            obj[c] = 1;
        }
    }

    //check 
    for (let i=0;i<num.length;i++) {
        if (!obj.hasOwnProperty(i)) {
            obj[i] = 0;
        }
        if (obj[i] != num[i]) {
            return false
        }
    }
    return true;
}

function test(...args) {
    const expected = args.pop();
    const actual = digitCount (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6083. Check if Number Has Equal Digit Count and Digit Value', () => {
    it('6083. 1', () => {test("1210", true)});
    it('6083. 2', () => {test("030", false)});
    it('6083. 3', () => {test("31564", false)});
});
