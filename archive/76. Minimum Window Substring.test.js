
const { expect } = require("chai");

//ascii of a = 97
const ASCII_LOWERCASE_A = 97;
//ascii of A = 65
const ASCII_UPPERCASE_A = 65;
const BAG_SIZE = 52;

/**
 * 
 * @param {string} c 
 */
function getBagIndex(c, i=0) {
    const code = c.charCodeAt(i);
    if (code >= ASCII_LOWERCASE_A) {
        return code - ASCII_LOWERCASE_A + 26;
    }

    return code - ASCII_UPPERCASE_A;
}

/**
 * 
 * @param {number[]} containerBag 
 * @param {number[]} containeeBag 
 */
function contains(containerBag, containeeBag) {
    for(let i=0;i<BAG_SIZE;i++) {
        if(containerBag[i]<containeeBag[i]) {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    const tBag = new Array(BAG_SIZE). fill(0);
    for(let i=0;i<t.length;i++){
        const index = getBagIndex(t, i);
        tBag[index]++;
    }

    let movingBagStart = 0;
    const movingBag = new Array(BAG_SIZE). fill(0);

    let ans = '';
    let maxLength = s.length+t.length;

    for(let i=0;i<s.length;i++) {
        const bagIndex = getBagIndex(s, i);
        movingBag[bagIndex]++;
        if (contains(movingBag, tBag)) {
            while(contains(movingBag, tBag)){
                movingBagIndex = getBagIndex(s, movingBagStart);
                movingBag[movingBagIndex]--;
                movingBagStart++;
            }
    
            const ansLength = i - movingBagStart+2;
            if (ansLength<maxLength) {
                maxLength = ansLength
                ans = s.substring(movingBagStart-1, i+1);
            }
        }
    }

    return ans;
}


function test(s, t, expected) {

    const actual = minWindow(s, t);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('76. Minimum Window Substring', () => {
    it('76. 1', () => { test("ADOBECODEBANC", "ABC", "BANC") });
    it('76. 2', () => { test("a", "a", "a") });
    it('76. 3', () => { test("a", "aa", "") });
    it('76. 4', () => { test("cabwefgewcwaefgcf", "cae", "cwae") });

});


/*
Runtime: 122 ms, faster than 73.86% of JavaScript online submissions for Minimum Window Substring.
Memory Usage: 44.6 MB, less than 81.58% of JavaScript online submissions for Minimum Window Substring.
*/