const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    const n = num1.length + num2.length;
    const array = new Array(n).fill(0);
    for (let i = 0; i < num1.length; i++) {
        const a = parseInt(num1[i]);
        for (let j = 0; j < num2.length; j++) {
            const b = parseInt(num2[j]);
            array[n - 2 - i - j] += a * b;
        }
    }

    //carry
    let carry = 0;
    for (let i = 0; i < n; i++) {
        array[i] += carry;
        carry = Math.floor(array[i] / 10);
        array[i] = array[i] - carry * 10;
    }

    let ans = '';
    for (let i=n-1;i>=0;i--) {
        if (ans === '' && array[i] === 0) {
            continue;
        }
        ans += array[i];
    }

    if (ans === ''){
        return '0';
    }    
    
    return ans;
}

function test(num1, num2, expected) {
    const actual = multiply(num1, num2);
    //console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('43. Multiply Strings', () => {
    it('1', () => { test('2', '3', '6') });
    it('2', () => { test('123', '456', '56088') });
    it('3', () => { test('456', '123', '56088') });
    it('4', () => { test('0', '0', '0') });
    it('5', () => { test('9', '9', '81') });
    it('6', () => { test('11', '11', '121') });
    it('7', () => { test('12', '12', '144') });
    it('8', () => { test('10', '10', '100') });
});


/*
Runtime: 65 ms, faster than 96.54% of JavaScript online submissions for Multiply Strings.
Memory Usage: 44.3 MB, less than 73.39% of JavaScript online submissions for Multiply Strings.
*/