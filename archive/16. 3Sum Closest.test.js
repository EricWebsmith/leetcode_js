
const {expect} = require('chai');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    const n = nums.length;
    let diff = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= n-3; i++) {
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            const currentDiff = sum - target;
            if (Math.abs(currentDiff) < Math.abs(diff)) {
                diff = currentDiff;
            }

            if (sum < target) {
                l++;
            } else {
                r--;
            }
        }

        if (diff === 0) {
            break;
        }
    }

    return target + diff;
}


function test(nums, target, expected) {
    const actual = threeSumClosest(nums, target);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('16. 3Sum Closest', () => {
    it('16. 1', () => {
test([-1, 2, 1, -4], 1, 2);
});
    it('16. 2', () => {
test([0, 0, 0], 1, 0);
});
});

/*
166 ms, 79.52%
*/
