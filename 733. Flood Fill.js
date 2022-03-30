const { assert } = require("chai");

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    const visited = [];
    for (let r = 0; r < m; r++) {
        visited.push([]);
        for (let c = 0; c < n; c++) {
            visited[r].push(0);
        }
    }


    if (oldColor === newColor) {
        return image;
    }

    function dfs(r, c) {
        visited[r][c] = 1;
        image[r][c] = newColor;
        if (r - 1 >= 0 && image[r - 1][c] === oldColor && visited[r - 1][c] === 0) {
            dfs(r - 1, c);
        }

        if (c - 1 >= 0 && image[r][c - 1] === oldColor && visited[r][c - 1] === 0) {
            dfs(r, c - 1);
        }

        if (r + 1 < m && image[r + 1][c] === oldColor && visited[r + 1][c] === 0) {
            dfs(r + 1, c);
        }

        if (c + 1 < n && image[r][c + 1] === oldColor && visited[r][c + 1] === 0) {
            dfs(r, c + 1);
        }
    }

    dfs(sr, sc);

    return image;
}

function test(image, sr, sc, newColor, expected){
    const m = image.length;
    const n = image[0].length;
    const actual = floodFill(image, sr, sc, newColor);
    console.log(actual);
    for(let r = 0;r<m;r++){
        for(let c=0;c<n;c++){
            assert.isTrue(expected[r][c] === actual[r][c])
        }
    }

    console.log('ok');
}

test([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2, [[2,2,2],[2,2,0],[2,0,1]]);
test([[0,0,0],[0,0,0]], 0, 0, 2, [[2,2,2],[2,2,2]]);

/*
Runtime: 84 ms, faster than 79.83% of JavaScript online submissions for Flood Fill.
Memory Usage: 45.2 MB, less than 7.88% of JavaScript online submissions for Flood Fill.
*/