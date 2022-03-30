/**
 * 
 * @param {number[]} intervalA 
 * @param {number[]} intervalB 
 * @returns {number}
 */
function intervalCompare(intervalA, intervalB){
    if(intervalA[0]!==intervalB[0]){
        return intervalA[0] - intervalB[0];
    }

    return intervalB[1] - intervalA[1];
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
    const n = intervals.length;
    intervals.sort(intervalCompare);
    let rightMax = intervals[0][1];
    let ans = n;
    for (let i = 1; i < n; i++) {
        const right = intervals[i][1];
        if(right <= rightMax){
            ans--;
        } else{
            rightMax = right;
        }
    }

    return ans;
}

/**
 * @param {number[][]} intervals
 * @param {number} expected
 * @returns {void}
 */
function test(intervals, expected){
    const actual = removeCoveredIntervals(intervals);
    console.log(expected === actual, expected, actual);
}

test([[1,4],[3,6],[2,8]], 2);

test([[1,4],[2,3]], 1);

test([[1,2],[1,4],[3,4]], 1);