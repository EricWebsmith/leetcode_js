const { expect } = require("chai");
const _ = require('lodash');

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {string} operator 
 */
function calc(n1, n2, operator) {
    switch(operator) {
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1 * n2;
        case '/':
            const result = n1 / n2;
            if (result >=0 ) {
                return Math.floor(result);
            }
            return -Math.floor(-result);
    }
    return -1;
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];
    const n = tokens.length;
    for (let i = 0; i < n; i++) {
        if (operators.includes(tokens[i])) {
            const n2 = stack.pop();
            const n1 = stack.pop();
            const result = calc(n1, n2, tokens[i]);
            stack.push(result);
        } else {
            const number = +tokens[i];
            stack.push(number);
        }
    }

    return stack.pop();
}

function test(tokens, expected) {
    const actual = evalRPN(tokens);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('150. Evaluate Reverse Polish Notation', () => {
    it('1', () => { test(["2","1","+","3","*"], 9) });
    it('2', () => { test(["4","13","5","/","+"], 6) });
    it('3', () => { test(["10","6","9","3","+","-11","*","/","*","17","+","5","+"], 22) });
});


/*
Runtime: 72 ms, faster than 90.91% of JavaScript online submissions for Evaluate Reverse Polish Notation.
Memory Usage: 44.6 MB, less than 84.42% of JavaScript online submissions for Evaluate Reverse Polish Notation.
*/