/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let mIndex = m-1;
    let nIndex = n - 1;
    for(let i = nums1.length - 1; i >= 0; i-- ){
        const mVal = nums1[mIndex];
        const nVal = nums2[nIndex];

        if(mVal > nVal || nIndex<0){
            nums1[i] = mVal;
            mIndex--;
        }
        else{
            nums1[i] = nVal;
            nIndex--
        }
    }
};

function test(nums1, m, nums2, n, expected){
    merge(nums1, m, nums2, n);
    let result = true;
    for(let i=0;i<m+n;i++){
        if(nums1[i] !== expected[i]){
            result = false;
            break;
        }
    }

    console.log(result, nums1);
}

test([1,2,3,0,0,0], 3, [2,5,6], 3, [1,2,2,3,5,6]);
test([1], 1, [], 0, [1]);
test([0], 0, [1], 1, [1]);
test([4,0,0,0,0,0],  1, [1,2,3,5,6], 5, [1,2,3,4,5,6])