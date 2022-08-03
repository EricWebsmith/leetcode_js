/**
 * int array
 * [T,T,T...F,F,F]
 * find the first F.
 * @param {number} left 
 * @param {number} right 
 * @param {function} condition
 * @returns 
 */
function binarySearchFirst(left, right, condition) {
    // add 1 to right if condition may not meet.
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (condition(mid)) {
            left = mid + 1;            
        } else {
            right = mid;
        }

    }
    return left;
}

function bisectLeft(a, x, lo=0, hi = a.length) {    
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (a[mid]<x) {
            lo = mid+1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function bisectRight(a, x, lo=0, hi = a.length) {
    while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (a[mid]<=x) {
            lo = mid+1;
        } else {
            hi = mid;
        }
    }
    return lo;
}
