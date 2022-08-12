
const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    const stack = [];
    let currentNumber = '';
    const digits = '0123456789'.split('');

    const pushNumber = (numString) => {
        if (numString.length === 0) {
            return;
        }
        const i = parseInt(currentNumber);
        pushInt(i);
    }

    const pushInt = (i) => {
        if (stack[stack.length - 1] === '-') {
            stack[stack.length - 1] = -i;
        } else {
            stack.push(i);
        }
    }

    for (const c of s) {
        if (c === ' ') {
            continue;
        } else if (c === '(') {
            currentNumber = ''
            stack.push(c);
        } else if (c === ')') {
            pushNumber(currentNumber);
            currentNumber = '';
            let t = 0;
            let last = stack.pop();
            while (last != '(') {
                t += last;
                last = stack.pop();
            }
            pushInt(t);
        } else if (c === '-') {
            pushNumber(currentNumber);
            currentNumber = '';
            stack.push(c);
        } else if (c === '+') {
            pushNumber(currentNumber);
            currentNumber = '';
        } else if (digits.includes(c)) {
            currentNumber += c;
        }
    }

    pushNumber(currentNumber);

    return _.sum(stack);
}


function test(s, expected) {

    const actual = calculate(s);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('224. Basic Calculator', () => {
    it('224. 1', () => { test("1 + 1", 2) });
    it('224. 2', () => { test(" 2-1 + 2 ", 3) });
    it('224. 3', () => { test("(1+(4+5+2)-3)+(6+8)", 23) });
    it('224. 4', () => { test("(1+(4+5+2)-3)+(6+8)+5", 28) });
    it('224. 5', () => { test("(1+(4+5+2)-3)-(6+8)+5", 0) });
    it('224. 6', () => { test(" 2-(1 + 2) ", -1) });
});


/*
Runtime: 113 ms, faster than 63.89% of JavaScript online submissions for Basic Calculator.
Memory Usage: 53.3 MB, less than 12.88% of JavaScript online submissions for Basic Calculator.
*/