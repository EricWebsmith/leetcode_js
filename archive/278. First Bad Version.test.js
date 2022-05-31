const { expect } = require("chai");

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    return function(n) {
        let right = n;
        let left = 0;
        const getMid = () => ((right - left) / 2 + left) | 0;
        let mid = getMid(right);
        while(left<=right){
            if(isBadVersion(mid)){
                right = mid-1;
            } else {
                left = mid+1;
                
            }
            mid = getMid();
        }
        return mid+1
    };
};

function test(n, bad) {
    const expected = bad;
    const isBadVersion = (v) => {
        return v>=bad;
    };
    const s = solution(isBadVersion);
    const actual = s(n);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('-------------', () => {
    it('1', () => {test(5,4)});
    it('2', () => {test(1,1,)});
    //it('3', () => {test()});
});

/*
Runtime: 64 ms, faster than 81.63% of JavaScript online submissions for First Bad Version.
Memory Usage: 41.6 MB, less than 80.22% of JavaScript online submissions for First Bad Version.
*/