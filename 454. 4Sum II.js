/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const key = nums1[i] + nums2[j];
            const count = map.get(key) ?? 0;
            map.set(key, count + 1);
        }
    }

    let ans = 0;
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const key = -nums3[i] - nums4[j];
            ans += map.get(key) ?? 0;
        }
    }

    return ans;
};

/*
Runtime: 200 ms, faster than 97.21% of JavaScript online submissions for 4Sum II.
Memory Usage: 45.9 MB, less than 32.27% of JavaScript online submissions for 4Sum II.
*/

/**
 * 
 * @returns {boolean}
 */
function hasKey() {
    return;
}