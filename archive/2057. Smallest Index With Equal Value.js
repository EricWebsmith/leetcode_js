/**
 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
    for(let i=0; i < nums.length; i++){
        if(i % 10 == nums[i]){
            return i;
        }
    }
    return -1;
};

console.log(smallestEqual([0, 1, 2]));
console.log(smallestEqual([4,3,2,1]));
console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]));
console.log(smallestEqual([2,1,3,5,2]));
console.log(smallestEqual([7,8,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,7,1,6]), 21);
console.log(smallestEqual([3,9,5,1,0,3,8,9,0,9,1,3,9,8,3,2,0,6,7,8,0,0,2,6,0,2,9,5,2,4,9,1,5,1,1,3,8,4,8,0,6,9,0,6,2,9,8,5,8]), 9);