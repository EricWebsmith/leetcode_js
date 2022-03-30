/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const n = nums.length;
    const ans = [[]];

    const current = [];
    let index = 0;
    function dfs(current, index) {
        if (index === n) {
            return;
        }
        //add
        const current2 = [...current];
        current2.push(nums[index]);
        ans.push(current2);
        dfs(current2, index + 1);

        //not add
        const current1 = [...current];
        dfs(current1, index + 1);
    }

    dfs(current, 0);
    return ans;
};

console.log(subsets([0, 1]));
console.log(subsets([1, 2, 3]));
console.log(subsets([0]));

/*
Runtime: 60 ms, faster than 99.34% of JavaScript online submissions for Subsets.
Memory Usage: 44.5 MB, less than 6.15% of JavaScript online submissions for Subsets.
*/