
const { expect } = require("chai");
const _ = require('lodash');

function permute(n, k) {
    let ans = 1;
    for (let i = 1; i <= k; i++) {
        ans *= (n - i + 1);
    }

    return ans;
}

function count(nDigits) {
    return 9 * permute(9, nDigits-1);
}

function hasRepeat(s) {
    const set = new Set(s.split(''));
    return set.size !== s.length;
}

/**
 * @param {number} n
 * @return {number}
 */
function countSpecialNumbers(n) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (n < 11) {
        return n;
    }

    const s = `${n}`;
    let ans = 0;
    for (let i = 1; i < s.length; i++) {
        ans += count(i);
    }

    for (let i = 0; i < s.length; i++) {
        const prefix = s.substring(0, i + 1);
        if (hasRepeat(prefix.substring(0, prefix.length-1))) {
            break;
        }
        const max = s[i];
        for (const d of digits) {
            if(i ===0 && d === '0') {
                continue;
            }
            if (d >= max) {
                continue;
            }

            if (prefix.indexOf(d) >= 0) {
                continue;
            }

            ans += permute(10 - i - 1, s.length - i - 1)
        }
    }

    if (!hasRepeat(s)) {
        ans++;
    }
    return ans;
}


function test(n, expected) {

    const actual = countSpecialNumbers(n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6151. Count Special Integers', () => {
    it('6151. 1', () => { test(20, 19) });
    it('6151. 2', () => { test(5, 5) });
    it('6151. 3', () => { test(135, 110) });
    it('6151. 4', () => { test(99, 90) });
    it('6151. 5', () => { test(233, 180) });
});
