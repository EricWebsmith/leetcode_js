/**
 * See 1760
 * @param {number} left 
 * @param {number} right 
 * @param {function} condition
 * @returns 
 */
 function binarySearchSmallest(left, right, condition) {
     // add 1 to right if condition may not meet.
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (condition(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }
    return left;
}