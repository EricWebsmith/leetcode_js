/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const n = nums.length;
    const map = {};
    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];
        if(map[complement] !== undefined){
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
};

function test(nums, target, expected){
    const actual = twoSum(nums, target);
    const result = actual[0] === expected[0] && actual[1] === expected[1];
    console.log(result, actual);
}

test([2,7,11,15], 9, [0,1]);
test([3,2,4], 6, [1,2]);
test([3,3], 6, [0,1]);