const { expect } = require("chai");

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
function maximumImportance(n, roads) {
    const cityCounts = [];
    for (let i=1;i<=n;i++) {
        cityCounts.push(0);
    }

    for (const road of roads) {
        cityCounts[road[0]]++; 
        cityCounts[road[1]]++;
    }

    cityCounts.sort((a, b) => a - b);

    let ans = 0;
    for (let i=0;i<n;i++) {
        ans += (i+1) * cityCounts[i];
    }

    return ans;
}

function test(...args) {
    const expected = args.pop();
    const actual = maximumImportance(...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('6085. Maximum Total Importance of Roads', () => {
    it('6085. 1', () => { test(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]], 43) });
    it('6085. 2', () => { test(5, [[0,3],[2,4],[1,3]], 20) });
    //it('3', () => { test() });
});
