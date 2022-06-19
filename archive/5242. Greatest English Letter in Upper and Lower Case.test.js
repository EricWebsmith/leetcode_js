
const { expect } = require("chai");

/**
 * @param {string} s
 * @return {string}
 */
function greatestLetter(s) {
    let set_ = new Set();
    for (const c of s) {
        set_.add(c.charCodeAt(0));
    }

    const codes = [...set_.values()];
    codes.sort((a,b) => b-a);
    for (const code of codes) {
        if (code>90) {
            continue;
        }

        const smallCode = code + (97-65);
        if (set_.has(smallCode)) {
            return String.fromCharCode(code);
        }
    }

    return "";
};

function test(...args) {
    const expected = args.pop();
    const actual = greatestLetter (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('5242. Greatest English Letter in Upper and Lower Case', () => {

    it('5242. 1', () => {test("lEeTcOdE", "E")});
    it('5242. 2', () => {test("arRAzFif", "R")});
    it('5242. 3', () => {test("AbCdEfGhIjK", "")});    
});

