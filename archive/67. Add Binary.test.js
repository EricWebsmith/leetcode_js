const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    const c = [];
    let carry = 0;
    const na = a.length;
    const nb = b.length;
    let ia = na - 1;
    let ib = nb - 1;
    while (ia >= 0 || ib >= 0) {
        if (carry === 1 && a[ia] === '1' && b[ib] === '1') {
            carry = 1;
            c.unshift('1');
        } else if (carry === 1 && (a[ia] === '1' || b[ib] === '1')) {
            carry = 1;
            c.unshift('0');
        } else if (carry === 1) {
            carry = 0;
            c.unshift('1');
        } else if (carry === 0 && a[ia] === '1' && b[ib] === '1') {
            carry = 1;
            c.unshift('0');
        } else if (carry === 0 && (a[ia] === '1' || b[ib] === '1')) {
            carry = 0;
            c.unshift('1');
        } else {
            carry = 0;
            c.unshift('0');
        }
        ia--;
        ib--;
    }
    if (carry === 1) {
        c.unshift('1');
    }

    return c.join('');
}

function test(a, b, expected) {
    const actual = addBinary(a, b);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('67. Add Binary', () => {
    it('1', () => { test('11', '1', '100') });
    it('2', () => { test('1010', '1011', '10101') });
    it('3', () => { test('101', '101', '1010') });
});

/*
Runtime: 72 ms, faster than 82.35% of JavaScript online submissions for Add Binary.
Memory Usage: 43 MB, less than 73.62% of JavaScript online submissions for Add Binary.
*/