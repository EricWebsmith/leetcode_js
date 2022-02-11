/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    
    const leftMap = new Map();
    const rightMap = new Map();
    leftMap.set(0, -1);
    rightMap.set(0, -1);

    let movingSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            movingSum--;
        } else {
            movingSum++;
        }

        if (!leftMap.has(movingSum)) {
            leftMap.set(movingSum, i);
        }

        rightMap.set(movingSum, i);
    }

    let ans = 0;
    for (const [key, rightPosition] of rightMap) {
        const leftPositoin = leftMap.get(key);
        const newAns = rightPosition - leftPositoin;
        ans = Math.max(ans, newAns);
    }

    return ans;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} expected 
 * @returns {void}
 */
function test(nums, expected) {
    const actual = findMaxLength(nums);
    console.log(actual === expected, expected, actual);
}

test([0, 1], 2);
test([0, 1, 0], 2);
test([0, 1, 0, 1], 4);
test([0, 1, 1, 1], 2);
test([0, 1, 1, 1, 0], 2);
test([0], 0);
test([1], 0);


/*
Runtime: 108 ms, faster than 96.55% of JavaScript online submissions for Contiguous Array.
Memory Usage: 53.5 MB, less than 10.34% of JavaScript online submissions for Contiguous Array.
*/