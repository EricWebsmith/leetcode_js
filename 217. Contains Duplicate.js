/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const d = {};
    for(let i = 0; i < nums.length; i++){
        if(d[nums[i]]){
            return true;
        }
        d[nums[i]] = true;
    }
    return false;
};