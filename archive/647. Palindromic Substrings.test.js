const {expect} = require('chai');

/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        // one center
        let radius = 0;
        while (s[i - radius] !== undefined && s[i - radius] === s[i + radius]) {
            ans++;
            radius++;
        }

        // two centers
        radius = 0;
        if (s[i + 1] !== s[i]) {
            continue;
        }

        while (s[i - radius] !== undefined &&
             s[i - radius] === s[i + 1 + radius]) {
            ans++;
            radius++;
        }
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = countSubstrings(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('647. Palindromic Substrings', () => {
    it('647. 1', () => {
test('abc', 3);
});
    it('647. 2', () => {
test('aaa', 6);
});
    it('647. 3', () => {
test('aaaa', 10);
});
    it('647. 4', () => {
test('abcd', 4);
});
    it('647. 5', () => {
test('abcdcba', 10);
});
    it('647. 6', () => {
test('abcddcba', 12);
});
});


/*
73 ms, 88.00%
*/
