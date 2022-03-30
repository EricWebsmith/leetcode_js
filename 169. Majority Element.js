/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const n = nums.length;
    let majority = nums[0];
    let count = 1;

    for(let i=1;i<n;i++){
        if(majority === nums[i]){
            count++;
        }
        else{
            count--;
            if(count<0){
                majority = nums[i];
                count = 0;
            }
        }
    }

    return majority;
};

/**
 * @param {number[]} nums
 * @param {number} expected
 * @return {void}
 */
function test(nums, expected){
    const actual = majorityElement(nums);
    console.log(actual === expected, expected, actual);
}

test([3,2,3], 3);
test([2,2,1,1,1,2,2], 2);

/*
Runtime: 60 ms, faster than 99.00% of JavaScript online submissions for Majority Element.
Memory Usage: 43.5 MB, less than 38.14% of JavaScript online submissions for Majority Element.
*/