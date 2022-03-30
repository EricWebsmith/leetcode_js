/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    const n = nums.length;

    const minList = [];
    let movingMin = nums[0];
    for (let i = 0; i < n; i++) {
        movingMin = Math.min(movingMin, nums[i]);
        minList.push(movingMin);
    }

    let movingMax = nums[n - 1];
    const maxList = [];
    for (let i = n - 1; i >= 0; i--) {
        movingMax = Math.max(movingMax, nums[i]);
        maxList.push(movingMax);
    }

    const diff = [];
    for (let i = 0; i < n; i++) {
        diff[i] = maxList[n - 1 - i] - minList[i];
    }

    let ans = Math.max(...diff);
    if (ans <= 0) {
        ans = -1;
    }

    return ans;
};

function test(nums, expected) {
    const actual = maximumDifference(nums);
    const result = actual === expected;
    console.log(result, actual);
}

test([7, 1, 5, 4], 4);
test([9, 4, 3, 2], -1);
test([1, 5, 2, 10], 9);
