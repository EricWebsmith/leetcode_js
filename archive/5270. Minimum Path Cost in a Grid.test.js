const { expect } = require("chai");

/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
function minPathCost (grid, moveCost) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = [];
    for (let r=0;r<m;r++) {
        const layerArray = [];
        for(let c=0;c<n;c++) {
            if(r===0) {
                layerArray.push(grid[0][c]);
            } else {
                layerArray.push(50*100);
            }
        }
        dp.push(layerArray);
    }

    for(let r = 1;r<m;r++) {
        for (let c=0;c<n;c++) {
            for (let previousC =0; previousC<n;previousC++) {
                const cellNo = grid[r-1][previousC];
                dp[r][c] = Math.min(dp[r][c], grid[r][c]+dp[r-1][previousC]+moveCost[cellNo][c]);
            }
        }
    }

    return Math.min(...dp[m-1]);
}

function test(...args) {
    const expected = args.pop();
    const actual = minPathCost (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}

describe('5270. Minimum Path Cost in a Grid', () => {
    it('5270. 1', () => {test([[5,3],[4,0],[2,1]], [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]], 17)});
    it('5270. 2', () => {test([[5,1,2],[4,0,3]], [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]], 6)});
    //it('5270. 3', () => {test()});
});
