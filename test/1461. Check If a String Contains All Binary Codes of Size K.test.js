const { expect } = require("chai");

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes (s, k) {
    const kLength = Math.pow(2, k);
    let sLength = s.length - k + 1;
    if (sLength < kLength) {
        return false;
    }

    const set = new Set();
    for(let i=0;i+k<=s.length;i++) {
        const code = s.substring(i, i+k);
        if(set.has(code)){
            sLength-=1;
            if (sLength<kLength) {
                return false;
            }
        } else {
            set.add(code);
        }
    }

    return set.size === kLength;
}

function test(...args) {
    const expected = args.pop();
    const actual = hasAllCodes (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('1461. Check If a String Contains All Binary Codes of Size K', () => {
    it('1461. 1', () => {test("00110110", 2, true)});
    it('1461. 2', () => {test("0110", 1, true)});
    it('1461. 3', () => {test("0110", 2, false)});
    it('1461. 4', () => {test("00110", 2, true)});
    it('1461. 5', () => {test("00000000001011100", 3, true)});
    it('1461. 6', () => {test("000011010111011001001111111001000100100100010100101100001101101101110001100100101111100111001001111001001010111010010101101001001110011100110101001001001000000110101001010011101100110110100010000", 7, false)});
    it('1461. 7', () => {test("011101100101110101101000011111101011111101110100111100010000010110010010011100110001110010101101011010010001101111000111110000001010100101111001111010110001111011001110100010001111000111010001111100101011100001001011101100010101010110001011110101001101001001111101000100011101110100100100101101110000000110001011100100111111001000100100010011001000101101100010010010001111010111010011110111110001010100000110000111010110001100100110111000111010111000010100100100101011001111010110010101110101000011011101000110001001100111100011000100110010101100001111000100101001111001100001010100100100110100101100111000110010110101010110010110001111010110101111011011100111001010101001011000101101110100001110011110001011000011100011111001110011111101110001110010000111010011110001011010100101110010110110100011111011110010100011111000000001011100110000010101110110111", 7, false)});
});


/*
Runtime: 259 ms, faster than 77.78% of JavaScript online submissions for Check If a String Contains All Binary Codes of Size K.
Memory Usage: 57.2 MB, less than 83.33% of JavaScript online submissions for Check If a String Contains All Binary Codes of Size K.
*/