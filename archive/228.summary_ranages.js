/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    if(nums.length==0){return [];}

    let dp = [0];
    let res = [];
    for(let i=1;i<nums.length;i++){
        dp.push(nums[i]-nums[i-1]);
    }

    let start = 0;
    let end = 1;
    for(let i=1;i<dp.length+1;i++){
        if(dp[i]===1){
            end = i+1;
        }else{  
            if(start===end-1){
                res.push(`${nums[start]}`);
            }
            else{
                res.push(`${nums[start]}->${nums[end-1]}`)
            }

            start = end;
            end = start+1;
        }
    }

    return res;

};

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([]))