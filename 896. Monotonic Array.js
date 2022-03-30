const { expect } = require("chai");

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function compare(num1, num2){
    if(num1 === num2) {
        return 0;
    }

    if(num1 > num2) {
        return 1;
    }

    if(num1 < num2){
        return -1;
    }
}

/**
 * @param {number[]} nums
 * @return {boolean}
*/
function isMonotonic(nums) {
    const n = nums.length;
    if (n<=2) {
        return true;
    }

    const compareFirstLast = compare(nums[0], nums[n-1]);
    for (let i = 1;i<n-1;i++){
        const compareResult = compare(nums[i], nums[i+1]);
        if (compareResult === 0){
            continue;
        }

        if(compareResult !== compareFirstLast){
            return false;
        }
    }

    return true;
}

/**
 * 
 * @param {Array} nums 
 * @param {boolean} expected
 * @returns {void}
 */
function test(nums, expected) {
    const actual = isMonotonic(nums);
    expect(actual).to.be.eql(expected);
}

//test([1,2,2,3], true);

describe('tests of 896', ()=>{
    it.only('1', () => { test([1,2,2,3], true); });
    it.only('2', () => { test([6,5,4,4], true); });
    it.only('3', () => { test([1,3,2], false); });
});

