/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i);
    }

    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = map.get(nums1[i]);
        let next = -1;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                next = nums2[j];
                break;
            }
        }
        ans.push(next);
    }
    return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} expected
 * @return {void}
 */
function test(nums1, nums2, expected) {
    const actual = nextGreaterElement(nums1, nums2);
    const result = actual.every((value, index) => value === expected[index])
    console.log(result, expected, actual);
}

test([4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]);
test([2, 4], [1, 2, 3, 4], [3, -1]);
test([1], [1, 2, 3, 4], [2]);
test([3], [1, 2, 3, 4], [4]);
test([4], [1, 2, 3, 4], [-1]);


/*
Runtime: 68 ms, faster than 98.71% of JavaScript online submissions for Next Greater Element I.
Memory Usage: 44.3 MB, less than 8.90% of JavaScript online submissions for Next Greater Element I.
*/