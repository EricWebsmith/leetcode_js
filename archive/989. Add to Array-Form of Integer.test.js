const { expect } = require("chai");
const _ = require('lodash');

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm (num, k) {
    const n = num.length;
    const ans = Array.from(num);
    let i = 0;
    //let carry = 0;
    while(k > 0) {
        //k = k + carry;
        const r = k % 10;
        k = (k - r) / 10;
        i++;
        if (n-i>=0){
            ans[n-i]+=r;
            if (ans[n-i]>=10){
                ans[n-i] = ans[n-i] - 10;
                k += 1;
            }
        } else {
            ans.unshift(r);
        }
        
    }

    return ans;
}

function test(num, k, expected) {
    const actual = addToArrayForm (num, k);
    console.log(actual, expected);
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test([1,2,0,0], 34, [1,2,3,4])});
    it('2', () => {test([2,7,4], 181, [4,5,5])});
    it('3', () => {test([2,1,5], 806, [1,0,2,1])});
});

/*
Runtime: 88 ms, faster than 99.15% of JavaScript online submissions for Add to Array-Form of Integer.
Memory Usage: 46.3 MB, less than 93.20% of JavaScript online submissions for Add to Array-Form of Integer.
*/