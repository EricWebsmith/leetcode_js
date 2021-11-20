/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let previous = map[nums[i]];
        if(previous !== undefined) {
            if(i - previous <= k) {
                return true;
            }
            map[nums[i]] = i;
        }
        else {
            map[nums[i]] = i;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3)==true);
console.log(containsNearbyDuplicate([1,0,1,1], 1)==true);
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)==false);