const _ = require('lodash');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    const ans = []; 
    let j = 0;
    for(let i=0;i<nums1.length;i++){
        const num = nums1[i];
        while(j<nums2.length && nums2[j]<num){
            j++;
        }

        if(nums2[j] === num){
            ans.push(num);
            j++;
        }
    }
    return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} expected
 * @return {number[]}
 */
function test(nums1, nums2, expected){

    const actual = intersect(nums1, nums2);
    let result = expected.length === actual.length;
    for(const num of expected){
        if(!actual.includes(num)){
            result = false;
            break;
        }
    }
    console.log(result, actual);
}

test([1,2,2,1], [2,2], [2,2]);
test([4,9,5], [9,4,9,8,4], [9, 4])

console.log(_.intersection([1,1,2,3], [1,1,3]));