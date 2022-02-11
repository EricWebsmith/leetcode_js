/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let removed = -1000000;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === removed) {
            nums.splice(i, 1);
            i--;
        }

        if (nums[i] === nums[i - 1]) {
            removed = nums[i];
        }
    }

    return nums.length;
};

function test(nums) {
    console.log('before:');
    console.log(nums);
    const actual = removeDuplicates(nums);
    //const result = actual === expected.length;
    console.log('after:');
    console.log(nums);
}

test([1, 1, 1, 2, 2, 3]);
test([0, 0, 1, 1, 1, 1, 2, 3, 3]);

/*
Runtime: 79 ms, faster than 91.07% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 44.4 MB, less than 6.41% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
*/