/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const n = nums.length;
    let movingSum = -100000;
    let maxSum = movingSum;
    for(let i=0;i<n;i++){
        if(movingSum<0){
            movingSum = nums[i];
        }
        else{
            movingSum += nums[i];
        }
        
        if(movingSum>maxSum){
            maxSum = movingSum;
        }
    }

    return maxSum;
};