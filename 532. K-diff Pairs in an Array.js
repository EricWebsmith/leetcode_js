/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k === 0){
        const set = new Set();
        const pariSet = new Set();
        for(const num of nums){
            if(set.has(num)){
                pariSet.add(num);
            }
            else{
                set.add(num);
            }
        }

        return pariSet.size;
    }

    const set = new Set(nums);
    let ans = 0;
    for(const key of set){
        if(set.has(key+k)){
            ans++;
        }
    }

    return ans;
};

/*
Runtime: 88 ms, faster than 81.33% of JavaScript online submissions for K-diff Pairs in an Array.
Memory Usage: 45.1 MB, less than 35.54% of JavaScript online submissions for K-diff Pairs in an Array.
*/