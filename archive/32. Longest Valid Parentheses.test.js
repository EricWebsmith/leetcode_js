const { expect } = require("chai");

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    const stack = [];
    let final = 0;
    let current = 0;
    for (const c of s) {
        if (c === '(') {
            stack.push(c);
        } else {
            if (stack.length > 0) {
                stack.pop();
                current += 2;
                if (stack.length === 0) {
                    final = Math.max(final, current);
                }
            } else {
                final = Math.max(final, current);
                current = 0;
            }
        }
    }

    if (stack.length === 0) {
        final = Math.max(final, current);
    }

    stack.length = 0;
    current = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        if (c === ')') {
            stack.push(c);
        } else {
            if (stack.length > 0) {
                stack.pop();
                current += 2;
                if (stack.length === 0) {
                    final = Math.max(final, current);
                }
            } else {
                final = Math.max(final, current);
                current = 0;
            }
        }
    }

    if (stack.length === 0) {
        final = Math.max(final, current);
    }

    return final;
}

function test(...args) {
    const expected = args.pop();
    const actual = longestValidParentheses(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('32. Longest Valid Parentheses', () => {
    it('32. 1', () => { test('(()', 2) } );
    it('32. 2', () => { test(')()())', 4) } );
    it('32. 3', () => { test(')()())))))', 4) } );
    it('32. 4', () => { test(')(()())))))', 6) } );
    it('32. 5', () => { test('()(()', 2) } );
    it('32. 6', () => { test('(())(', 4) } );
    it('32. 7', () => { test(')()(((())))(', 10) } );
    //it('32. 3', () => {test()});
})


/*
Runtime: 80 ms, faster than 69.04% of JavaScript online submissions for Longest Valid Parentheses.
Memory Usage: 44.9 MB, less than 27.55% of JavaScript online submissions for Longest Valid Parentheses.
*/
