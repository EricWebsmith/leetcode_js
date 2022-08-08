
const { expect } = require("chai");
const _ = require('lodash');


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function validPartition(nums) {
    const n = nums.length;
    const cache = {};

    function good(index) {
        if(cache[index] != null) {
            return cache[index];
        }

        if(index===n) {
            cache[index] = true;
            return true;
        }

        if(index+1<n && nums[index] == nums[index+1] && good(index+2)) {
            cache[index] = true;
            return true;
        }

        if(index+2<n && nums[index] == nums[index+1] && nums[index+1] === nums[index+2] && good(index+3)){
            cache[index] = true;
            return true;
        }

        if(index+2<n && nums[index]+1 == nums[index+1] && nums[index+1]+1==nums[index+2] && good(index+3)) {
            cache[index] = true;
            return true;
        }

        cache[index] = false;
        return false;
    }

    return good(0);
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
