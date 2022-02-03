/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0;
    let current = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            current++;
        } else if(current>0) {
            ans = Math.max(ans, current);
            current = 0;
        }
    }
    ans = Math.max(ans, current);
    return ans;
};

function test(nums, expected){
    const actual = findMaxConsecutiveOnes(nums);
    const result = actual === expected;
    console.log(result, expected, actual);
}

test([1,1,0,1,1,1], 3);
test([1,0,1,1,0,1], 2);
test([1], 1);
test([0], 0);

/*
Runtime: 64 ms, faster than 99.53% of JavaScript online submissions for Max Consecutive Ones.
Memory Usage: 44.5 MB, less than 9.51% of JavaScript online submissions for Max Consecutive Ones.
*/