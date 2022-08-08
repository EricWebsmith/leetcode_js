
const { expect } = require("chai");

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function validPartition(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(false);
    dp[0] = true;

    isValid = (i) => {
        if(i>=2 && nums[i-1] === nums[i-2] && dp[i-2]) {
            return true;
        }
        if (!dp[i] && i>=3 && nums[i-1] === nums[i-2] && nums[i-2] === nums[i-3] && dp[i-3]) {
            return true;
        } 
        
        if (!dp[i] && nums[i-1] === nums[i-2]+1 && nums[i-2] === nums[i-3]+1 && dp[i-3]) {
            return true;
        }

        return false;
    }

    for (let i=1;i<=n;i++) {
        dp[i] = isValid(i);
    }
    return dp[n]

}


function test(nums, expected) {
    
    const actual = validPartition(nums);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('2369. Check if There is a Valid Partition For The Array', () => {
    it('2369. 1', () => {test( [4,4,4,5,6],  true)});
    it('2369. 2', () => {test( [1,1,1,2],  false)});
   
});
