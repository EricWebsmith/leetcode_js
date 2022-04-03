const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} s
 * @return {string[]}
 */
function expand(s) {
    const ans = [''];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '{') {
            for (let j = 0; j < ans.length; j++) {
                ans[j] += s[i];
            }
            continue;
        }


        i++;
        const options = [];
        while (s[i] !== '}') {
            if (s[i] !== ',') {
                options.push(s[i])
            }
            i++;
        }
        options.sort();
        const len = ans.length;
        for (let j = 0; j < len; j++) {
            const ansItem = ans.shift();
            for(const option of options) {
                ans.push(ansItem+option);
            }
        }
    }

    return ans;
};

function test(s, expected) {
    const actual = expand(s);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => { test("{a,b}c{d,e}f", ["acdf","acef","bcdf","bcef"]) });
    it('2', () => { test("abcd", ["abcd"]) });
    it('3', () => { test('abcd{1,2}{3,4}', ['abcd13','abcd14','abcd23','abcd24']) });
});

/*
Runtime: 76 ms, faster than 92.86% of JavaScript online submissions for Brace Expansion.
Memory Usage: 45.6 MB, less than 55.10% of JavaScript online submissions for Brace Expansion.
*/